package operations

type GetDeleteSamlProviderActionEnum string

const (
	GetDeleteSamlProviderActionEnumDeleteSamlProvider GetDeleteSamlProviderActionEnum = "DeleteSAMLProvider"
)

type GetDeleteSamlProviderVersionEnum string

const (
	GetDeleteSamlProviderVersionEnumTwoThousandAndTen0508 GetDeleteSamlProviderVersionEnum = "2010-05-08"
)

type GetDeleteSamlProviderQueryParams struct {
	Action          GetDeleteSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SamlProviderArn string                           `queryParam:"style=form,explode=true,name=SAMLProviderArn"`
	Version         GetDeleteSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteSamlProviderRequest struct {
	QueryParams GetDeleteSamlProviderQueryParams
	Headers     GetDeleteSamlProviderHeaders
}

type GetDeleteSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
