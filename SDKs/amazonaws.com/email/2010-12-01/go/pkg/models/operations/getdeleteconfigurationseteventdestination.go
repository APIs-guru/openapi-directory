package operations

type GetDeleteConfigurationSetEventDestinationActionEnum string

const (
	GetDeleteConfigurationSetEventDestinationActionEnumDeleteConfigurationSetEventDestination GetDeleteConfigurationSetEventDestinationActionEnum = "DeleteConfigurationSetEventDestination"
)

type GetDeleteConfigurationSetEventDestinationVersionEnum string

const (
	GetDeleteConfigurationSetEventDestinationVersionEnumTwoThousandAndTen1201 GetDeleteConfigurationSetEventDestinationVersionEnum = "2010-12-01"
)

type GetDeleteConfigurationSetEventDestinationQueryParams struct {
	Action               GetDeleteConfigurationSetEventDestinationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSetName string                                               `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	EventDestinationName string                                               `queryParam:"style=form,explode=true,name=EventDestinationName"`
	Version              GetDeleteConfigurationSetEventDestinationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteConfigurationSetEventDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteConfigurationSetEventDestinationRequest struct {
	QueryParams GetDeleteConfigurationSetEventDestinationQueryParams
	Headers     GetDeleteConfigurationSetEventDestinationHeaders
}

type GetDeleteConfigurationSetEventDestinationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
