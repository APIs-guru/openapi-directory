package operations

type UpdateConnectorDefinitionPathParams struct {
	ConnectorDefinitionID string `pathParam:"style=simple,explode=false,name=ConnectorDefinitionId"`
}

type UpdateConnectorDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateConnectorDefinitionRequestBody struct {
	Name *string `json:"Name"`
}

type UpdateConnectorDefinitionRequest struct {
	PathParams UpdateConnectorDefinitionPathParams
	Headers    UpdateConnectorDefinitionHeaders
	Request    UpdateConnectorDefinitionRequestBody `request:"mediaType=application/json"`
}

type UpdateConnectorDefinitionResponse struct {
	BadRequestException               *interface{}
	ContentType                       string
	StatusCode                        int64
	UpdateConnectorDefinitionResponse map[string]interface{}
}
