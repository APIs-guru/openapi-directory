package operations

type DeleteResourceDefinitionPathParams struct {
	ResourceDefinitionID string `pathParam:"style=simple,explode=false,name=ResourceDefinitionId"`
}

type DeleteResourceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteResourceDefinitionRequest struct {
	PathParams DeleteResourceDefinitionPathParams
	Headers    DeleteResourceDefinitionHeaders
}

type DeleteResourceDefinitionResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	DeleteResourceDefinitionResponse map[string]interface{}
	StatusCode                       int64
}
