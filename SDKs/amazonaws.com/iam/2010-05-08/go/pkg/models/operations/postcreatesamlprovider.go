package operations

type PostCreateSamlProviderActionEnum string

const (
	PostCreateSamlProviderActionEnumCreateSamlProvider PostCreateSamlProviderActionEnum = "CreateSAMLProvider"
)

type PostCreateSamlProviderVersionEnum string

const (
	PostCreateSamlProviderVersionEnumTwoThousandAndTen0508 PostCreateSamlProviderVersionEnum = "2010-05-08"
)

type PostCreateSamlProviderQueryParams struct {
	Action  PostCreateSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateSamlProviderRequest struct {
	QueryParams PostCreateSamlProviderQueryParams
	Headers     PostCreateSamlProviderHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
