package operations

type GetListSamlProviderTagsActionEnum string

const (
	GetListSamlProviderTagsActionEnumListSamlProviderTags GetListSamlProviderTagsActionEnum = "ListSAMLProviderTags"
)

type GetListSamlProviderTagsVersionEnum string

const (
	GetListSamlProviderTagsVersionEnumTwoThousandAndTen0508 GetListSamlProviderTagsVersionEnum = "2010-05-08"
)

type GetListSamlProviderTagsQueryParams struct {
	Action          GetListSamlProviderTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker          *string                            `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems        *int64                             `queryParam:"style=form,explode=true,name=MaxItems"`
	SamlProviderArn string                             `queryParam:"style=form,explode=true,name=SAMLProviderArn"`
	Version         GetListSamlProviderTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListSamlProviderTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListSamlProviderTagsRequest struct {
	QueryParams GetListSamlProviderTagsQueryParams
	Headers     GetListSamlProviderTagsHeaders
}

type GetListSamlProviderTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
