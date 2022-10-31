package operations

type GetListOpenIDConnectProviderTagsActionEnum string

const (
	GetListOpenIDConnectProviderTagsActionEnumListOpenIDConnectProviderTags GetListOpenIDConnectProviderTagsActionEnum = "ListOpenIDConnectProviderTags"
)

type GetListOpenIDConnectProviderTagsVersionEnum string

const (
	GetListOpenIDConnectProviderTagsVersionEnumTwoThousandAndTen0508 GetListOpenIDConnectProviderTagsVersionEnum = "2010-05-08"
)

type GetListOpenIDConnectProviderTagsQueryParams struct {
	Action                   GetListOpenIDConnectProviderTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker                   *string                                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems                 *int64                                      `queryParam:"style=form,explode=true,name=MaxItems"`
	OpenIDConnectProviderArn string                                      `queryParam:"style=form,explode=true,name=OpenIDConnectProviderArn"`
	Version                  GetListOpenIDConnectProviderTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListOpenIDConnectProviderTagsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListOpenIDConnectProviderTagsRequest struct {
	QueryParams GetListOpenIDConnectProviderTagsQueryParams
	Headers     GetListOpenIDConnectProviderTagsHeaders
}

type GetListOpenIDConnectProviderTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
