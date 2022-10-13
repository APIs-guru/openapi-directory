package operations

type UntagResourcePathParams struct {
	ResourceID string `pathParam:"style=simple,explode=false,name=ResourceId"`
}

type UntagResourceQueryParams struct {
	TagKeys []string `queryParam:"style=form,explode=true,name=tagKeys"`
}

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UntagResourceRequest struct {
	PathParams  UntagResourcePathParams
	QueryParams UntagResourceQueryParams
	Headers     UntagResourceHeaders
}

type UntagResourceResponse struct {
	AccessPointNotFound *interface{}
	BadRequest          *interface{}
	ContentType         string
	FileSystemNotFound  *interface{}
	InternalServerError *interface{}
	StatusCode          int64
}
