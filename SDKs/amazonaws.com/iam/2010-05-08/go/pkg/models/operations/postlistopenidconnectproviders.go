package operations

type PostListOpenIDConnectProvidersActionEnum string

const (
	PostListOpenIDConnectProvidersActionEnumListOpenIDConnectProviders PostListOpenIDConnectProvidersActionEnum = "ListOpenIDConnectProviders"
)

type PostListOpenIDConnectProvidersVersionEnum string

const (
	PostListOpenIDConnectProvidersVersionEnumTwoThousandAndTen0508 PostListOpenIDConnectProvidersVersionEnum = "2010-05-08"
)

type PostListOpenIDConnectProvidersQueryParams struct {
	Action  PostListOpenIDConnectProvidersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListOpenIDConnectProvidersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListOpenIDConnectProvidersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListOpenIDConnectProvidersRequest struct {
	QueryParams PostListOpenIDConnectProvidersQueryParams
	Headers     PostListOpenIDConnectProvidersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListOpenIDConnectProvidersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
