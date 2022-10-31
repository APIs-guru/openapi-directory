package operations

type PublishPathParams struct {
	Topic string `pathParam:"style=simple,explode=false,name=topic"`
}

type PublishQueryParams struct {
	Qos    *int64 `queryParam:"style=form,explode=true,name=qos"`
	Retain *bool  `queryParam:"style=form,explode=true,name=retain"`
}

type PublishHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PublishRequestBody struct {
	Payload *string `json:"payload,omitempty"`
}

type PublishRequest struct {
	PathParams  PublishPathParams
	QueryParams PublishQueryParams
	Headers     PublishHeaders
	Request     PublishRequestBody `request:"mediaType=application/json"`
}

type PublishResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	MethodNotAllowedException *interface{}
	StatusCode                int64
	UnauthorizedException     *interface{}
}
