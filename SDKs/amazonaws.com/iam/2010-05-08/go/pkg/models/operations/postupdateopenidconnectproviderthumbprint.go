package operations

type PostUpdateOpenIDConnectProviderThumbprintActionEnum string

const (
	PostUpdateOpenIDConnectProviderThumbprintActionEnumUpdateOpenIDConnectProviderThumbprint PostUpdateOpenIDConnectProviderThumbprintActionEnum = "UpdateOpenIDConnectProviderThumbprint"
)

type PostUpdateOpenIDConnectProviderThumbprintVersionEnum string

const (
	PostUpdateOpenIDConnectProviderThumbprintVersionEnumTwoThousandAndTen0508 PostUpdateOpenIDConnectProviderThumbprintVersionEnum = "2010-05-08"
)

type PostUpdateOpenIDConnectProviderThumbprintQueryParams struct {
	Action  PostUpdateOpenIDConnectProviderThumbprintActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateOpenIDConnectProviderThumbprintVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateOpenIDConnectProviderThumbprintHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateOpenIDConnectProviderThumbprintRequest struct {
	QueryParams PostUpdateOpenIDConnectProviderThumbprintQueryParams
	Headers     PostUpdateOpenIDConnectProviderThumbprintHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateOpenIDConnectProviderThumbprintResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
