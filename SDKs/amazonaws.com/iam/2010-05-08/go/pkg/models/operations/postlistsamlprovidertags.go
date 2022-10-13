package operations

type PostListSamlProviderTagsActionEnum string

const (
	PostListSamlProviderTagsActionEnumListSamlProviderTags PostListSamlProviderTagsActionEnum = "ListSAMLProviderTags"
)

type PostListSamlProviderTagsVersionEnum string

const (
	PostListSamlProviderTagsVersionEnumTwoThousandAndTen0508 PostListSamlProviderTagsVersionEnum = "2010-05-08"
)

type PostListSamlProviderTagsQueryParams struct {
	Action  PostListSamlProviderTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListSamlProviderTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListSamlProviderTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListSamlProviderTagsRequest struct {
	QueryParams PostListSamlProviderTagsQueryParams
	Headers     PostListSamlProviderTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListSamlProviderTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
