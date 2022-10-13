package operations

type PostListOpenIDConnectProviderTagsActionEnum string

const (
	PostListOpenIDConnectProviderTagsActionEnumListOpenIDConnectProviderTags PostListOpenIDConnectProviderTagsActionEnum = "ListOpenIDConnectProviderTags"
)

type PostListOpenIDConnectProviderTagsVersionEnum string

const (
	PostListOpenIDConnectProviderTagsVersionEnumTwoThousandAndTen0508 PostListOpenIDConnectProviderTagsVersionEnum = "2010-05-08"
)

type PostListOpenIDConnectProviderTagsQueryParams struct {
	Action  PostListOpenIDConnectProviderTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListOpenIDConnectProviderTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListOpenIDConnectProviderTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListOpenIDConnectProviderTagsRequest struct {
	QueryParams PostListOpenIDConnectProviderTagsQueryParams
	Headers     PostListOpenIDConnectProviderTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListOpenIDConnectProviderTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
