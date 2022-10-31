package operations

type GetGetSamlProviderActionEnum string

const (
	GetGetSamlProviderActionEnumGetSamlProvider GetGetSamlProviderActionEnum = "GetSAMLProvider"
)

type GetGetSamlProviderVersionEnum string

const (
	GetGetSamlProviderVersionEnumTwoThousandAndTen0508 GetGetSamlProviderVersionEnum = "2010-05-08"
)

type GetGetSamlProviderQueryParams struct {
	Action          GetGetSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SamlProviderArn string                        `queryParam:"style=form,explode=true,name=SAMLProviderArn"`
	Version         GetGetSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetSamlProviderRequest struct {
	QueryParams GetGetSamlProviderQueryParams
	Headers     GetGetSamlProviderHeaders
}

type GetGetSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
