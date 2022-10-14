package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConnectorProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateConnectorProfileRequestBodyConnectionModeEnum string

const (
	CreateConnectorProfileRequestBodyConnectionModeEnumPublic  CreateConnectorProfileRequestBodyConnectionModeEnum = "Public"
	CreateConnectorProfileRequestBodyConnectionModeEnumPrivate CreateConnectorProfileRequestBodyConnectionModeEnum = "Private"
)

type CreateConnectorProfileRequestBodyConnectorProfileConfig struct {
	ConnectorProfileCredentials *shared.ConnectorProfileCredentials `json:"connectorProfileCredentials,omitempty"`
	ConnectorProfileProperties  *shared.ConnectorProfileProperties  `json:"connectorProfileProperties,omitempty"`
}

type CreateConnectorProfileRequestBodyConnectorTypeEnum string

const (
	CreateConnectorProfileRequestBodyConnectorTypeEnumSalesforce       CreateConnectorProfileRequestBodyConnectorTypeEnum = "Salesforce"
	CreateConnectorProfileRequestBodyConnectorTypeEnumSingular         CreateConnectorProfileRequestBodyConnectorTypeEnum = "Singular"
	CreateConnectorProfileRequestBodyConnectorTypeEnumSlack            CreateConnectorProfileRequestBodyConnectorTypeEnum = "Slack"
	CreateConnectorProfileRequestBodyConnectorTypeEnumRedshift         CreateConnectorProfileRequestBodyConnectorTypeEnum = "Redshift"
	CreateConnectorProfileRequestBodyConnectorTypeEnumS3               CreateConnectorProfileRequestBodyConnectorTypeEnum = "S3"
	CreateConnectorProfileRequestBodyConnectorTypeEnumMarketo          CreateConnectorProfileRequestBodyConnectorTypeEnum = "Marketo"
	CreateConnectorProfileRequestBodyConnectorTypeEnumGoogleanalytics  CreateConnectorProfileRequestBodyConnectorTypeEnum = "Googleanalytics"
	CreateConnectorProfileRequestBodyConnectorTypeEnumZendesk          CreateConnectorProfileRequestBodyConnectorTypeEnum = "Zendesk"
	CreateConnectorProfileRequestBodyConnectorTypeEnumServicenow       CreateConnectorProfileRequestBodyConnectorTypeEnum = "Servicenow"
	CreateConnectorProfileRequestBodyConnectorTypeEnumDatadog          CreateConnectorProfileRequestBodyConnectorTypeEnum = "Datadog"
	CreateConnectorProfileRequestBodyConnectorTypeEnumTrendmicro       CreateConnectorProfileRequestBodyConnectorTypeEnum = "Trendmicro"
	CreateConnectorProfileRequestBodyConnectorTypeEnumSnowflake        CreateConnectorProfileRequestBodyConnectorTypeEnum = "Snowflake"
	CreateConnectorProfileRequestBodyConnectorTypeEnumDynatrace        CreateConnectorProfileRequestBodyConnectorTypeEnum = "Dynatrace"
	CreateConnectorProfileRequestBodyConnectorTypeEnumInfornexus       CreateConnectorProfileRequestBodyConnectorTypeEnum = "Infornexus"
	CreateConnectorProfileRequestBodyConnectorTypeEnumAmplitude        CreateConnectorProfileRequestBodyConnectorTypeEnum = "Amplitude"
	CreateConnectorProfileRequestBodyConnectorTypeEnumVeeva            CreateConnectorProfileRequestBodyConnectorTypeEnum = "Veeva"
	CreateConnectorProfileRequestBodyConnectorTypeEnumEventBridge      CreateConnectorProfileRequestBodyConnectorTypeEnum = "EventBridge"
	CreateConnectorProfileRequestBodyConnectorTypeEnumLookoutMetrics   CreateConnectorProfileRequestBodyConnectorTypeEnum = "LookoutMetrics"
	CreateConnectorProfileRequestBodyConnectorTypeEnumUpsolver         CreateConnectorProfileRequestBodyConnectorTypeEnum = "Upsolver"
	CreateConnectorProfileRequestBodyConnectorTypeEnumHoneycode        CreateConnectorProfileRequestBodyConnectorTypeEnum = "Honeycode"
	CreateConnectorProfileRequestBodyConnectorTypeEnumCustomerProfiles CreateConnectorProfileRequestBodyConnectorTypeEnum = "CustomerProfiles"
	CreateConnectorProfileRequestBodyConnectorTypeEnumSapoData         CreateConnectorProfileRequestBodyConnectorTypeEnum = "SAPOData"
)

type CreateConnectorProfileRequestBody struct {
	ConnectionMode         CreateConnectorProfileRequestBodyConnectionModeEnum     `json:"connectionMode"`
	ConnectorProfileConfig CreateConnectorProfileRequestBodyConnectorProfileConfig `json:"connectorProfileConfig"`
	ConnectorProfileName   string                                                  `json:"connectorProfileName"`
	ConnectorType          CreateConnectorProfileRequestBodyConnectorTypeEnum      `json:"connectorType"`
	KmsArn                 *string                                                 `json:"kmsArn,omitempty"`
}

type CreateConnectorProfileRequest struct {
	Headers CreateConnectorProfileHeaders
	Request CreateConnectorProfileRequestBody `request:"mediaType=application/json"`
}

type CreateConnectorProfileResponse struct {
	ConflictException                *interface{}
	ConnectorAuthenticationException *interface{}
	ContentType                      string
	CreateConnectorProfileResponse   *shared.CreateConnectorProfileResponse
	InternalServerException          *interface{}
	ServiceQuotaExceededException    *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
