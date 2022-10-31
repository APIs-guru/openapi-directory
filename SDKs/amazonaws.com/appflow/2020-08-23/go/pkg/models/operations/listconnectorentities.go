package operations

import (
	"openapi/pkg/models/shared"
)

type ListConnectorEntitiesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListConnectorEntitiesRequestBodyConnectorTypeEnum string

const (
	ListConnectorEntitiesRequestBodyConnectorTypeEnumSalesforce       ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Salesforce"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumSingular         ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Singular"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumSlack            ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Slack"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumRedshift         ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Redshift"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumS3               ListConnectorEntitiesRequestBodyConnectorTypeEnum = "S3"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumMarketo          ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Marketo"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumGoogleanalytics  ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Googleanalytics"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumZendesk          ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Zendesk"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumServicenow       ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Servicenow"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumDatadog          ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Datadog"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumTrendmicro       ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Trendmicro"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumSnowflake        ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Snowflake"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumDynatrace        ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Dynatrace"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumInfornexus       ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Infornexus"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumAmplitude        ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Amplitude"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumVeeva            ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Veeva"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumEventBridge      ListConnectorEntitiesRequestBodyConnectorTypeEnum = "EventBridge"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumLookoutMetrics   ListConnectorEntitiesRequestBodyConnectorTypeEnum = "LookoutMetrics"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumUpsolver         ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Upsolver"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumHoneycode        ListConnectorEntitiesRequestBodyConnectorTypeEnum = "Honeycode"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumCustomerProfiles ListConnectorEntitiesRequestBodyConnectorTypeEnum = "CustomerProfiles"
	ListConnectorEntitiesRequestBodyConnectorTypeEnumSapoData         ListConnectorEntitiesRequestBodyConnectorTypeEnum = "SAPOData"
)

type ListConnectorEntitiesRequestBody struct {
	ConnectorProfileName *string                                            `json:"connectorProfileName,omitempty"`
	ConnectorType        *ListConnectorEntitiesRequestBodyConnectorTypeEnum `json:"connectorType,omitempty"`
	EntitiesPath         *string                                            `json:"entitiesPath,omitempty"`
}

type ListConnectorEntitiesRequest struct {
	Headers ListConnectorEntitiesHeaders
	Request ListConnectorEntitiesRequestBody `request:"mediaType=application/json"`
}

type ListConnectorEntitiesResponse struct {
	ConnectorAuthenticationException *interface{}
	ConnectorServerException         *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ListConnectorEntitiesResponse    *shared.ListConnectorEntitiesResponse
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
