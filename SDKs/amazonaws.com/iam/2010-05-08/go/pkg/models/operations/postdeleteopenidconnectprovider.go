package operations

type PostDeleteOpenIDConnectProviderActionEnum string

const (
	PostDeleteOpenIDConnectProviderActionEnumDeleteOpenIDConnectProvider PostDeleteOpenIDConnectProviderActionEnum = "DeleteOpenIDConnectProvider"
)

type PostDeleteOpenIDConnectProviderVersionEnum string

const (
	PostDeleteOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 PostDeleteOpenIDConnectProviderVersionEnum = "2010-05-08"
)

type PostDeleteOpenIDConnectProviderQueryParams struct {
	Action  PostDeleteOpenIDConnectProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteOpenIDConnectProviderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteOpenIDConnectProviderRequest struct {
	QueryParams PostDeleteOpenIDConnectProviderQueryParams
	Headers     PostDeleteOpenIDConnectProviderHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteOpenIDConnectProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
