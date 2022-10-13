package operations

type PostToConnectionPathParams struct {
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostToConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostToConnectionRequestBody struct {
	Data string `json:"Data"`
}

type PostToConnectionRequest struct {
	PathParams PostToConnectionPathParams
	Headers    PostToConnectionHeaders
	Request    PostToConnectionRequestBody `request:"mediaType=application/json"`
}

type PostToConnectionResponse struct {
	ContentType              string
	ForbiddenException       *interface{}
	GoneException            *interface{}
	LimitExceededException   *interface{}
	PayloadTooLargeException *interface{}
	StatusCode               int64
}
