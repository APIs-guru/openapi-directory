package operations

type DeleteCoreDefinitionPathParams struct {
	CoreDefinitionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
}

type DeleteCoreDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteCoreDefinitionRequest struct {
	PathParams DeleteCoreDefinitionPathParams
	Headers    DeleteCoreDefinitionHeaders
}

type DeleteCoreDefinitionResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteCoreDefinitionResponse map[string]interface{}
	StatusCode                   int64
}
