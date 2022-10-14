package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectorProfilesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeConnectorProfilesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeConnectorProfilesRequestBodyConnectorTypeEnum string

const (
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumSalesforce       DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Salesforce"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumSingular         DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Singular"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumSlack            DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Slack"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumRedshift         DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Redshift"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumS3               DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "S3"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumMarketo          DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Marketo"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumGoogleanalytics  DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Googleanalytics"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumZendesk          DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Zendesk"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumServicenow       DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Servicenow"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumDatadog          DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Datadog"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumTrendmicro       DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Trendmicro"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumSnowflake        DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Snowflake"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumDynatrace        DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Dynatrace"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumInfornexus       DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Infornexus"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumAmplitude        DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Amplitude"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumVeeva            DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Veeva"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumEventBridge      DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "EventBridge"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumLookoutMetrics   DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "LookoutMetrics"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumUpsolver         DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Upsolver"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumHoneycode        DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "Honeycode"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumCustomerProfiles DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "CustomerProfiles"
	DescribeConnectorProfilesRequestBodyConnectorTypeEnumSapoData         DescribeConnectorProfilesRequestBodyConnectorTypeEnum = "SAPOData"
)

type DescribeConnectorProfilesRequestBody struct {
	ConnectorProfileNames []string                                               `json:"connectorProfileNames,omitempty"`
	ConnectorType         *DescribeConnectorProfilesRequestBodyConnectorTypeEnum `json:"connectorType,omitempty"`
	MaxResults            *int64                                                 `json:"maxResults,omitempty"`
	NextToken             *string                                                `json:"nextToken,omitempty"`
}

type DescribeConnectorProfilesRequest struct {
	QueryParams DescribeConnectorProfilesQueryParams
	Headers     DescribeConnectorProfilesHeaders
	Request     DescribeConnectorProfilesRequestBody `request:"mediaType=application/json"`
}

type DescribeConnectorProfilesResponse struct {
	ContentType                       string
	DescribeConnectorProfilesResponse *shared.DescribeConnectorProfilesResponse
	InternalServerException           *interface{}
	StatusCode                        int64
	ValidationException               *interface{}
}
