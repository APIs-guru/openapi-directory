package operations

type ResetAuthorizersCachePathParams struct {
	APIID     string `pathParam:"style=simple,explode=false,name=apiId"`
	StageName string `pathParam:"style=simple,explode=false,name=stageName"`
}

type ResetAuthorizersCacheHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ResetAuthorizersCacheRequest struct {
	PathParams ResetAuthorizersCachePathParams
	Headers    ResetAuthorizersCacheHeaders
}

type ResetAuthorizersCacheResponse struct {
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
