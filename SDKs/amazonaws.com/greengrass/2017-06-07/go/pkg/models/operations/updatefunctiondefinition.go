package operations

type UpdateFunctionDefinitionPathParams struct {
	FunctionDefinitionID string `pathParam:"style=simple,explode=false,name=FunctionDefinitionId"`
}

type UpdateFunctionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFunctionDefinitionRequestBody struct {
	Name *string `json:"Name,omitempty"`
}

type UpdateFunctionDefinitionRequest struct {
	PathParams UpdateFunctionDefinitionPathParams
	Headers    UpdateFunctionDefinitionHeaders
	Request    UpdateFunctionDefinitionRequestBody `request:"mediaType=application/json"`
}

type UpdateFunctionDefinitionResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	StatusCode                       int64
	UpdateFunctionDefinitionResponse map[string]interface{}
}
