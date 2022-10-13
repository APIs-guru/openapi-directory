package operations

type PostListInstanceProfileTagsActionEnum string

const (
	PostListInstanceProfileTagsActionEnumListInstanceProfileTags PostListInstanceProfileTagsActionEnum = "ListInstanceProfileTags"
)

type PostListInstanceProfileTagsVersionEnum string

const (
	PostListInstanceProfileTagsVersionEnumTwoThousandAndTen0508 PostListInstanceProfileTagsVersionEnum = "2010-05-08"
)

type PostListInstanceProfileTagsQueryParams struct {
	Action  PostListInstanceProfileTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListInstanceProfileTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListInstanceProfileTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListInstanceProfileTagsRequest struct {
	QueryParams PostListInstanceProfileTagsQueryParams
	Headers     PostListInstanceProfileTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListInstanceProfileTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
