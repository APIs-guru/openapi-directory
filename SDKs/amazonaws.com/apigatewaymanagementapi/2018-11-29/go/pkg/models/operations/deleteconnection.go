package operations

type DeleteConnectionPathParams struct {
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type DeleteConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteConnectionRequest struct {
	PathParams DeleteConnectionPathParams
	Headers    DeleteConnectionHeaders
}

type DeleteConnectionResponse struct {
	ContentType            string
	ForbiddenException     *interface{}
	GoneException          *interface{}
	LimitExceededException *interface{}
	StatusCode             int64
}
