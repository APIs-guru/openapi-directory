package operations

type PostUpdateSamlProviderActionEnum string

const (
	PostUpdateSamlProviderActionEnumUpdateSamlProvider PostUpdateSamlProviderActionEnum = "UpdateSAMLProvider"
)

type PostUpdateSamlProviderVersionEnum string

const (
	PostUpdateSamlProviderVersionEnumTwoThousandAndTen0508 PostUpdateSamlProviderVersionEnum = "2010-05-08"
)

type PostUpdateSamlProviderQueryParams struct {
	Action  PostUpdateSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateSamlProviderRequest struct {
	QueryParams PostUpdateSamlProviderQueryParams
	Headers     PostUpdateSamlProviderHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
