package operations

type PostRemoveClientIDFromOpenIDConnectProviderActionEnum string

const (
	PostRemoveClientIDFromOpenIDConnectProviderActionEnumRemoveClientIDFromOpenIDConnectProvider PostRemoveClientIDFromOpenIDConnectProviderActionEnum = "RemoveClientIDFromOpenIDConnectProvider"
)

type PostRemoveClientIDFromOpenIDConnectProviderVersionEnum string

const (
	PostRemoveClientIDFromOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 PostRemoveClientIDFromOpenIDConnectProviderVersionEnum = "2010-05-08"
)

type PostRemoveClientIDFromOpenIDConnectProviderQueryParams struct {
	Action  PostRemoveClientIDFromOpenIDConnectProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveClientIDFromOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveClientIDFromOpenIDConnectProviderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRemoveClientIDFromOpenIDConnectProviderRequest struct {
	QueryParams PostRemoveClientIDFromOpenIDConnectProviderQueryParams
	Headers     PostRemoveClientIDFromOpenIDConnectProviderHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemoveClientIDFromOpenIDConnectProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
