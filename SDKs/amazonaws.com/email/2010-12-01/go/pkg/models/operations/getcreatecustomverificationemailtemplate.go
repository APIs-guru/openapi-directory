package operations

type GetCreateCustomVerificationEmailTemplateActionEnum string

const (
	GetCreateCustomVerificationEmailTemplateActionEnumCreateCustomVerificationEmailTemplate GetCreateCustomVerificationEmailTemplateActionEnum = "CreateCustomVerificationEmailTemplate"
)

type GetCreateCustomVerificationEmailTemplateVersionEnum string

const (
	GetCreateCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 GetCreateCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)

type GetCreateCustomVerificationEmailTemplateQueryParams struct {
	Action                GetCreateCustomVerificationEmailTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	FailureRedirectionURL string                                              `queryParam:"style=form,explode=true,name=FailureRedirectionURL"`
	FromEmailAddress      string                                              `queryParam:"style=form,explode=true,name=FromEmailAddress"`
	SuccessRedirectionURL string                                              `queryParam:"style=form,explode=true,name=SuccessRedirectionURL"`
	TemplateContent       string                                              `queryParam:"style=form,explode=true,name=TemplateContent"`
	TemplateName          string                                              `queryParam:"style=form,explode=true,name=TemplateName"`
	TemplateSubject       string                                              `queryParam:"style=form,explode=true,name=TemplateSubject"`
	Version               GetCreateCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateCustomVerificationEmailTemplateRequest struct {
	QueryParams GetCreateCustomVerificationEmailTemplateQueryParams
	Headers     GetCreateCustomVerificationEmailTemplateHeaders
}

type GetCreateCustomVerificationEmailTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
