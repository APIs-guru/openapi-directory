package shared

// CustomVerificationEmailTemplate
// Contains information about a custom verification email template.
type CustomVerificationEmailTemplate struct {
	FailureRedirectionURL *string
	FromEmailAddress      *string
	SuccessRedirectionURL *string
	TemplateName          *string
	TemplateSubject       *string
}
