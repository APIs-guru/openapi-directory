package operations

type DeleteConnectionPathParams struct {
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type DeleteConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
