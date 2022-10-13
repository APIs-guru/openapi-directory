package operations

type GetUpdateCustomVerificationEmailTemplateActionEnum string

const (
	GetUpdateCustomVerificationEmailTemplateActionEnumUpdateCustomVerificationEmailTemplate GetUpdateCustomVerificationEmailTemplateActionEnum = "UpdateCustomVerificationEmailTemplate"
)

type GetUpdateCustomVerificationEmailTemplateVersionEnum string

const (
	GetUpdateCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 GetUpdateCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)

type GetUpdateCustomVerificationEmailTemplateQueryParams struct {
	Action                GetUpdateCustomVerificationEmailTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	FailureRedirectionURL *string                                             `queryParam:"style=form,explode=true,name=FailureRedirectionURL"`
	FromEmailAddress      *string                                             `queryParam:"style=form,explode=true,name=FromEmailAddress"`
	SuccessRedirectionURL *string                                             `queryParam:"style=form,explode=true,name=SuccessRedirectionURL"`
	TemplateContent       *string                                             `queryParam:"style=form,explode=true,name=TemplateContent"`
	TemplateName          string                                              `queryParam:"style=form,explode=true,name=TemplateName"`
	TemplateSubject       *string                                             `queryParam:"style=form,explode=true,name=TemplateSubject"`
	Version               GetUpdateCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateCustomVerificationEmailTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateCustomVerificationEmailTemplateRequest struct {
	QueryParams GetUpdateCustomVerificationEmailTemplateQueryParams
	Headers     GetUpdateCustomVerificationEmailTemplateHeaders
}

type GetUpdateCustomVerificationEmailTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
