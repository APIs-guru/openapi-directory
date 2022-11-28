package shared

// GetCustomVerificationEmailTemplateResponse
// The content of the custom verification email template.
type GetCustomVerificationEmailTemplateResponse struct {
	FailureRedirectionURL *string
	FromEmailAddress      *string
	SuccessRedirectionURL *string
	TemplateContent       *string
	TemplateName          *string
	TemplateSubject       *string
}
