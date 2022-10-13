package operations

type DeleteDimensionPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteDimensionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDimensionRequest struct {
	PathParams DeleteDimensionPathParams
	Headers    DeleteDimensionHeaders
}

type DeleteDimensionResponse struct {
	ContentType              string
	DeleteDimensionResponse  map[string]interface{}
	InternalFailureException *interface{}
	InvalidRequestException  *interface{}
	StatusCode               int64
	ThrottlingException      *interface{}
}
