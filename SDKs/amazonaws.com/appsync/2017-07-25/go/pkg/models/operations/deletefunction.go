package operations

type DeleteFunctionPathParams struct {
	APIID      string `pathParam:"style=simple,explode=false,name=apiId"`
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type DeleteFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFunctionRequest struct {
	PathParams DeleteFunctionPathParams
	Headers    DeleteFunctionHeaders
}

type DeleteFunctionResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteFunctionResponse          map[string]interface{}
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
