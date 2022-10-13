package operations

type PostUpdateTagsForResourceActionEnum string

const (
	PostUpdateTagsForResourceActionEnumUpdateTagsForResource PostUpdateTagsForResourceActionEnum = "UpdateTagsForResource"
)

type PostUpdateTagsForResourceVersionEnum string

const (
	PostUpdateTagsForResourceVersionEnumTwoThousandAndTen1201 PostUpdateTagsForResourceVersionEnum = "2010-12-01"
)

type PostUpdateTagsForResourceQueryParams struct {
	Action  PostUpdateTagsForResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateTagsForResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateTagsForResourceRequest struct {
	QueryParams PostUpdateTagsForResourceQueryParams
	Headers     PostUpdateTagsForResourceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateTagsForResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
