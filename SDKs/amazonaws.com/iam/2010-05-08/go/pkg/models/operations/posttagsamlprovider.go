package operations

type PostTagSamlProviderActionEnum string

const (
	PostTagSamlProviderActionEnumTagSamlProvider PostTagSamlProviderActionEnum = "TagSAMLProvider"
)

type PostTagSamlProviderVersionEnum string

const (
	PostTagSamlProviderVersionEnumTwoThousandAndTen0508 PostTagSamlProviderVersionEnum = "2010-05-08"
)

type PostTagSamlProviderQueryParams struct {
	Action  PostTagSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTagSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTagSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostTagSamlProviderRequest struct {
	QueryParams PostTagSamlProviderQueryParams
	Headers     PostTagSamlProviderHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTagSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
