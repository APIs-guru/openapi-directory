package operations

type DeleteConnectorDefinitionPathParams struct {
	ConnectorDefinitionID string `pathParam:"style=simple,explode=false,name=ConnectorDefinitionId"`
}

type DeleteConnectorDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteConnectorDefinitionRequest struct {
	PathParams DeleteConnectorDefinitionPathParams
	Headers    DeleteConnectorDefinitionHeaders
}

type DeleteConnectorDefinitionResponse struct {
	BadRequestException               *interface{}
	ContentType                       string
	DeleteConnectorDefinitionResponse map[string]interface{}
	StatusCode                        int64
}
