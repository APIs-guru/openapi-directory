package operations

type GetRemoveClientIDFromOpenIDConnectProviderActionEnum string

const (
	GetRemoveClientIDFromOpenIDConnectProviderActionEnumRemoveClientIDFromOpenIDConnectProvider GetRemoveClientIDFromOpenIDConnectProviderActionEnum = "RemoveClientIDFromOpenIDConnectProvider"
)

type GetRemoveClientIDFromOpenIDConnectProviderVersionEnum string

const (
	GetRemoveClientIDFromOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 GetRemoveClientIDFromOpenIDConnectProviderVersionEnum = "2010-05-08"
)

type GetRemoveClientIDFromOpenIDConnectProviderQueryParams struct {
	Action                   GetRemoveClientIDFromOpenIDConnectProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientID                 string                                                `queryParam:"style=form,explode=true,name=ClientID"`
	OpenIDConnectProviderArn string                                                `queryParam:"style=form,explode=true,name=OpenIDConnectProviderArn"`
	Version                  GetRemoveClientIDFromOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRemoveClientIDFromOpenIDConnectProviderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRemoveClientIDFromOpenIDConnectProviderRequest struct {
	QueryParams GetRemoveClientIDFromOpenIDConnectProviderQueryParams
	Headers     GetRemoveClientIDFromOpenIDConnectProviderHeaders
}

type GetRemoveClientIDFromOpenIDConnectProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
