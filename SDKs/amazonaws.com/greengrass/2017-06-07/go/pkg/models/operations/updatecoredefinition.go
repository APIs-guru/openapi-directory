package operations

type UpdateCoreDefinitionPathParams struct {
	CoreDefinitionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
}

type UpdateCoreDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCoreDefinitionRequestBody struct {
	Name *string `json:"Name,omitempty"`
}

type UpdateCoreDefinitionRequest struct {
	PathParams UpdateCoreDefinitionPathParams
	Headers    UpdateCoreDefinitionHeaders
	Request    UpdateCoreDefinitionRequestBody `request:"mediaType=application/json"`
}

type UpdateCoreDefinitionResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	StatusCode                   int64
	UpdateCoreDefinitionResponse map[string]interface{}
}
