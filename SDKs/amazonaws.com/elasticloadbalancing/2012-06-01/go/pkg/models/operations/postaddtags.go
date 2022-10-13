package operations

type PostAddTagsActionEnum string

const (
	PostAddTagsActionEnumAddTags PostAddTagsActionEnum = "AddTags"
)

type PostAddTagsVersionEnum string

const (
	PostAddTagsVersionEnumTwoThousandAndTwelve0601 PostAddTagsVersionEnum = "2012-06-01"
)

type PostAddTagsQueryParams struct {
	Action  PostAddTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAddTagsRequest struct {
	QueryParams PostAddTagsQueryParams
	Headers     PostAddTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
