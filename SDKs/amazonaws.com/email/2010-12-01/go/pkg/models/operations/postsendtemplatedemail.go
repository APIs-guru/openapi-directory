package operations

type PostSendTemplatedEmailActionEnum string

const (
	PostSendTemplatedEmailActionEnumSendTemplatedEmail PostSendTemplatedEmailActionEnum = "SendTemplatedEmail"
)

type PostSendTemplatedEmailVersionEnum string

const (
	PostSendTemplatedEmailVersionEnumTwoThousandAndTen1201 PostSendTemplatedEmailVersionEnum = "2010-12-01"
)

type PostSendTemplatedEmailQueryParams struct {
	Action  PostSendTemplatedEmailActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSendTemplatedEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSendTemplatedEmailHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSendTemplatedEmailRequest struct {
	QueryParams PostSendTemplatedEmailQueryParams
	Headers     PostSendTemplatedEmailHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSendTemplatedEmailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
