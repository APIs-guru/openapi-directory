package operations

type UpdateResourceDefinitionPathParams struct {
	ResourceDefinitionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionId"`
}

type UpdateResourceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateResourceDefinitionRequestBody struct {
	Name *string `json:"Name,omitempty"`
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
