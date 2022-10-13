package operations

type DeleteModelPathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
}

type DeleteModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteModelRequest struct {
	PathParams DeleteModelPathParams
	Headers    DeleteModelHeaders
}

type DeleteModelResponse struct {
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
