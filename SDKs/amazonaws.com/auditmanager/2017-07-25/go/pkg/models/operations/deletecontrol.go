package operations

type DeleteControlPathParams struct {
	ControlID string `pathParam:"style=simple,explode=false,name=controlId"`
}

type DeleteControlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteControlRequest struct {
	PathParams DeleteControlPathParams
	Headers    DeleteControlHeaders
}

type DeleteControlResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteControlResponse     map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
