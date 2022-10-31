package operations

type DeleteDimensionPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DeleteDimensionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
