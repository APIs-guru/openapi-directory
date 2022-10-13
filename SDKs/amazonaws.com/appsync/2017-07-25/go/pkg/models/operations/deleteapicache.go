package operations

type DeleteAPICachePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type DeleteAPICacheHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteAPICacheRequest struct {
	PathParams DeleteAPICachePathParams
	Headers    DeleteAPICacheHeaders
}

type DeleteAPICacheResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteAPICacheResponse          map[string]interface{}
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
