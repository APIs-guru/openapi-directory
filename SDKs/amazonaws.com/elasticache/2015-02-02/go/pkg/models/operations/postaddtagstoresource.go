package operations

type PostAddTagsToResourceActionEnum string

const (
	PostAddTagsToResourceActionEnumAddTagsToResource PostAddTagsToResourceActionEnum = "AddTagsToResource"
)

type PostAddTagsToResourceVersionEnum string

const (
	PostAddTagsToResourceVersionEnumTwoThousandAndFifteen0202 PostAddTagsToResourceVersionEnum = "2015-02-02"
)

type PostAddTagsToResourceQueryParams struct {
	Action  PostAddTagsToResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddTagsToResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddTagsToResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAddTagsToResourceRequest struct {
	QueryParams PostAddTagsToResourceQueryParams
	Headers     PostAddTagsToResourceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddTagsToResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
