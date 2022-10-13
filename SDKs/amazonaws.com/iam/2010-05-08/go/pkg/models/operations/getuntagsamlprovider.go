package operations

type GetUntagSamlProviderActionEnum string

const (
	GetUntagSamlProviderActionEnumUntagSamlProvider GetUntagSamlProviderActionEnum = "UntagSAMLProvider"
)

type GetUntagSamlProviderVersionEnum string

const (
	GetUntagSamlProviderVersionEnumTwoThousandAndTen0508 GetUntagSamlProviderVersionEnum = "2010-05-08"
)

type GetUntagSamlProviderQueryParams struct {
	Action          GetUntagSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SamlProviderArn string                          `queryParam:"style=form,explode=true,name=SAMLProviderArn"`
	TagKeys         []string                        `queryParam:"style=form,explode=true,name=TagKeys"`
	Version         GetUntagSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUntagSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUntagSamlProviderRequest struct {
	QueryParams GetUntagSamlProviderQueryParams
	Headers     GetUntagSamlProviderHeaders
}

type GetUntagSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
