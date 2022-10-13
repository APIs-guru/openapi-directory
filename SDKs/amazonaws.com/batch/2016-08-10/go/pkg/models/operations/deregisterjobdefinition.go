package operations

type DeregisterJobDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeregisterJobDefinitionRequestBody struct {
	JobDefinition string `json:"jobDefinition"`
}

type DeregisterJobDefinitionRequest struct {
	Headers DeregisterJobDefinitionHeaders
	Request DeregisterJobDefinitionRequestBody `request:"mediaType=application/json"`
}

type DeregisterJobDefinitionResponse struct {
	ClientException                 *interface{}
	ContentType                     string
	DeregisterJobDefinitionResponse map[string]interface{}
	ServerException                 *interface{}
	StatusCode                      int64
}
