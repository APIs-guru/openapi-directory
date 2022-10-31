package operations

type GetUpdateSamlProviderActionEnum string

const (
	GetUpdateSamlProviderActionEnumUpdateSamlProvider GetUpdateSamlProviderActionEnum = "UpdateSAMLProvider"
)

type GetUpdateSamlProviderVersionEnum string

const (
	GetUpdateSamlProviderVersionEnumTwoThousandAndTen0508 GetUpdateSamlProviderVersionEnum = "2010-05-08"
)

type GetUpdateSamlProviderQueryParams struct {
	Action               GetUpdateSamlProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SamlMetadataDocument string                           `queryParam:"style=form,explode=true,name=SAMLMetadataDocument"`
	SamlProviderArn      string                           `queryParam:"style=form,explode=true,name=SAMLProviderArn"`
	Version              GetUpdateSamlProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateSamlProviderHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdateSamlProviderRequest struct {
	QueryParams GetUpdateSamlProviderQueryParams
	Headers     GetUpdateSamlProviderHeaders
}

type GetUpdateSamlProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
