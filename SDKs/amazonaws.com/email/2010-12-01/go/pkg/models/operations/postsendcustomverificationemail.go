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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
