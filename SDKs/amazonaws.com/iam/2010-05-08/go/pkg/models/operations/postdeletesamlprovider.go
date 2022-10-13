package operations

type PostDeleteSamlProviderActionEnum string

const (
	PostDeleteSamlProviderActionEnumDeleteSamlProvider PostDeleteSamlProviderActionEnum = "DeleteSAMLProvider"
)

type PostDeleteSamlProviderVersionEnum string

const (
	PostDeleteSamlProviderVersionEnumTwoThousandAndTen0508 PostDeleteSamlProviderVersionEnum = "2010-05-08"
)

type PostDeleteSamlProviderQueryParams struct {
	Action  PostDeleteSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteSamlProviderRequest struct {
	QueryParams PostDeleteSamlProviderQueryParams
	Headers     PostDeleteSamlProviderHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
