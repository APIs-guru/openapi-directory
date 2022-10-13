package operations

type UpdateResourceDefinitionPathParams struct {
	ResourceDefinitionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionId"`
}

type UpdateResourceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateResourceDefinitionRequestBody struct {
	Name *string `json:"Name"`
}

type UpdateResourceDefinitionRequest struct {
	PathParams UpdateResourceDefinitionPathParams
	Headers    UpdateResourceDefinitionHeaders
	Request    UpdateResourceDefinitionRequestBody `request:"mediaType=application/json"`
}

type UpdateResourceDefinitionResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	StatusCode                       int64
	UpdateResourceDefinitionResponse map[string]interface{}
}
