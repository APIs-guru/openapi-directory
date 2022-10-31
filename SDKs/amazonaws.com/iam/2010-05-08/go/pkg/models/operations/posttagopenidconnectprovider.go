package operations

type PostTagOpenIDConnectProviderActionEnum string

const (
	PostTagOpenIDConnectProviderActionEnumTagOpenIDConnectProvider PostTagOpenIDConnectProviderActionEnum = "TagOpenIDConnectProvider"
)

type PostTagOpenIDConnectProviderVersionEnum string

const (
	PostTagOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 PostTagOpenIDConnectProviderVersionEnum = "2010-05-08"
)

type PostTagOpenIDConnectProviderQueryParams struct {
	Action  PostTagOpenIDConnectProviderActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTagOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTagOpenIDConnectProviderHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostTagOpenIDConnectProviderRequest struct {
	QueryParams PostTagOpenIDConnectProviderQueryParams
	Headers     PostTagOpenIDConnectProviderHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTagOpenIDConnectProviderResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
