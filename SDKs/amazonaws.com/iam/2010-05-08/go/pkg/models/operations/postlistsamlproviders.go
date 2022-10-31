package operations

type PostListSamlProvidersActionEnum string

const (
	PostListSamlProvidersActionEnumListSamlProviders PostListSamlProvidersActionEnum = "ListSAMLProviders"
)

type PostListSamlProvidersVersionEnum string

const (
	PostListSamlProvidersVersionEnumTwoThousandAndTen0508 PostListSamlProvidersVersionEnum = "2010-05-08"
)

type PostListSamlProvidersQueryParams struct {
	Action  PostListSamlProvidersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListSamlProvidersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListSamlProvidersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListSamlProvidersRequest struct {
	QueryParams PostListSamlProvidersQueryParams
	Headers     PostListSamlProvidersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListSamlProvidersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
