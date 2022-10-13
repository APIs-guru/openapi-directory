package operations

type GetSendCustomVerificationEmailActionEnum string

const (
	GetSendCustomVerificationEmailActionEnumSendCustomVerificationEmail GetSendCustomVerificationEmailActionEnum = "SendCustomVerificationEmail"
)

type GetSendCustomVerificationEmailVersionEnum string

const (
	GetSendCustomVerificationEmailVersionEnumTwoThousandAndTen1201 GetSendCustomVerificationEmailVersionEnum = "2010-12-01"
)

type GetSendCustomVerificationEmailQueryParams struct {
	Action               GetSendCustomVerificationEmailActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSetName *string                                   `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	EmailAddress         string                                    `queryParam:"style=form,explode=true,name=EmailAddress"`
	TemplateName         string                                    `queryParam:"style=form,explode=true,name=TemplateName"`
	Version              GetSendCustomVerificationEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSendCustomVerificationEmailHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSendCustomVerificationEmailRequest struct {
	QueryParams GetSendCustomVerificationEmailQueryParams
	Headers     GetSendCustomVerificationEmailHeaders
}

type GetSendCustomVerificationEmailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
