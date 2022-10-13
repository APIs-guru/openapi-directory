package operations

type PostSendEmailActionEnum string

const (
	PostSendEmailActionEnumSendEmail PostSendEmailActionEnum = "SendEmail"
)

type PostSendEmailVersionEnum string

const (
	PostSendEmailVersionEnumTwoThousandAndTen1201 PostSendEmailVersionEnum = "2010-12-01"
)

type PostSendEmailQueryParams struct {
	Action  PostSendEmailActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSendEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSendEmailHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSendEmailRequest struct {
	QueryParams PostSendEmailQueryParams
	Headers     PostSendEmailHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSendEmailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
