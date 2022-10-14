package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectorEntityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeConnectorEntityRequestBodyConnectorTypeEnum string

const (
	DescribeConnectorEntityRequestBodyConnectorTypeEnumSalesforce       DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Salesforce"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumSingular         DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Singular"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumSlack            DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Slack"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumRedshift         DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Redshift"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumS3               DescribeConnectorEntityRequestBodyConnectorTypeEnum = "S3"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumMarketo          DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Marketo"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumGoogleanalytics  DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Googleanalytics"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumZendesk          DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Zendesk"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumServicenow       DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Servicenow"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumDatadog          DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Datadog"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumTrendmicro       DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Trendmicro"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumSnowflake        DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Snowflake"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumDynatrace        DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Dynatrace"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumInfornexus       DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Infornexus"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumAmplitude        DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Amplitude"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumVeeva            DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Veeva"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumEventBridge      DescribeConnectorEntityRequestBodyConnectorTypeEnum = "EventBridge"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumLookoutMetrics   DescribeConnectorEntityRequestBodyConnectorTypeEnum = "LookoutMetrics"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumUpsolver         DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Upsolver"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumHoneycode        DescribeConnectorEntityRequestBodyConnectorTypeEnum = "Honeycode"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumCustomerProfiles DescribeConnectorEntityRequestBodyConnectorTypeEnum = "CustomerProfiles"
	DescribeConnectorEntityRequestBodyConnectorTypeEnumSapoData         DescribeConnectorEntityRequestBodyConnectorTypeEnum = "SAPOData"
)

type DescribeConnectorEntityRequestBody struct {
	ConnectorEntityName  string                                               `json:"connectorEntityName"`
	ConnectorProfileName *string                                              `json:"connectorProfileName,omitempty"`
	ConnectorType        *DescribeConnectorEntityRequestBodyConnectorTypeEnum `json:"connectorType,omitempty"`
}

type DescribeConnectorEntityRequest struct {
	Headers DescribeConnectorEntityHeaders
	Request DescribeConnectorEntityRequestBody `request:"mediaType=application/json"`
}

type DescribeConnectorEntityResponse struct {
	ConnectorAuthenticationException *interface{}
	ConnectorServerException         *interface{}
	ContentType                      string
	DescribeConnectorEntityResponse  *shared.DescribeConnectorEntityResponse
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
