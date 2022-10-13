package operations

type UntagResourcePathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
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
	BadRequestException   *interface{}
	ContentType           string
	NotFoundException     *interface{}
	StatusCode            int64
	UntagResourceResponse map[string]interface{}
}
