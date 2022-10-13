package operations

type PostSendBounceActionEnum string

const (
	PostSendBounceActionEnumSendBounce PostSendBounceActionEnum = "SendBounce"
)

type PostSendBounceVersionEnum string

const (
	PostSendBounceVersionEnumTwoThousandAndTen1201 PostSendBounceVersionEnum = "2010-12-01"
)

type PostSendBounceQueryParams struct {
	Action  PostSendBounceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSendBounceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSendBounceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSendBounceRequest struct {
	QueryParams PostSendBounceQueryParams
	Headers     PostSendBounceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSendBounceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
