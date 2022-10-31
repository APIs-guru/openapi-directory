package operations

type PostUntagSamlProviderActionEnum string

const (
	PostUntagSamlProviderActionEnumUntagSamlProvider PostUntagSamlProviderActionEnum = "UntagSAMLProvider"
)

type PostUntagSamlProviderVersionEnum string

const (
	PostUntagSamlProviderVersionEnumTwoThousandAndTen0508 PostUntagSamlProviderVersionEnum = "2010-05-08"
)

type PostUntagSamlProviderQueryParams struct {
	Action  PostUntagSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUntagSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUntagSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUntagSamlProviderRequest struct {
	QueryParams PostUntagSamlProviderQueryParams
	Headers     PostUntagSamlProviderHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUntagSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
