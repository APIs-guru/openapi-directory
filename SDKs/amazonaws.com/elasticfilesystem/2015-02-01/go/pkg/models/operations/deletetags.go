package operations

type DeleteTagsPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type DeleteTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteTagsRequestBody struct {
	TagKeys []string `json:"TagKeys"`
}

type DeleteTagsRequest struct {
	PathParams DeleteTagsPathParams
	Headers    DeleteTagsHeaders
	Request    DeleteTagsRequestBody `request:"mediaType=application/json"`
}

type DeleteTagsResponse struct {
	BadRequest          *interface{}
	ContentType         string
	FileSystemNotFound  *interface{}
	InternalServerError *interface{}
	StatusCode          int64
}
