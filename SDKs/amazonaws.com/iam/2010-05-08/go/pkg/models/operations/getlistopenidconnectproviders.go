package operations

type GetListOpenIDConnectProvidersActionEnum string

const (
	GetListOpenIDConnectProvidersActionEnumListOpenIDConnectProviders GetListOpenIDConnectProvidersActionEnum = "ListOpenIDConnectProviders"
)

type GetListOpenIDConnectProvidersVersionEnum string

const (
	GetListOpenIDConnectProvidersVersionEnumTwoThousandAndTen0508 GetListOpenIDConnectProvidersVersionEnum = "2010-05-08"
)

type GetListOpenIDConnectProvidersQueryParams struct {
	Action  GetListOpenIDConnectProvidersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetListOpenIDConnectProvidersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListOpenIDConnectProvidersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListOpenIDConnectProvidersRequest struct {
	QueryParams GetListOpenIDConnectProvidersQueryParams
	Headers     GetListOpenIDConnectProvidersHeaders
}

type GetListOpenIDConnectProvidersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
