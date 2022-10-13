package operations

type PostSendCustomVerificationEmailActionEnum string

const (
	PostSendCustomVerificationEmailActionEnumSendCustomVerificationEmail PostSendCustomVerificationEmailActionEnum = "SendCustomVerificationEmail"
)

type PostSendCustomVerificationEmailVersionEnum string

const (
	PostSendCustomVerificationEmailVersionEnumTwoThousandAndTen1201 PostSendCustomVerificationEmailVersionEnum = "2010-12-01"
)

type PostSendCustomVerificationEmailQueryParams struct {
	Action  PostSendCustomVerificationEmailActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSendCustomVerificationEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSendCustomVerificationEmailHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSendCustomVerificationEmailRequest struct {
	QueryParams PostSendCustomVerificationEmailQueryParams
	Headers     PostSendCustomVerificationEmailHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSendCustomVerificationEmailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
