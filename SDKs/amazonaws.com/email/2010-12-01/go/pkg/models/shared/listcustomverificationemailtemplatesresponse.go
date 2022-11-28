package shared

// ListCustomVerificationEmailTemplatesResponse
// A paginated list of custom verification email templates.
type ListCustomVerificationEmailTemplatesResponse struct {
	CustomVerificationEmailTemplates []CustomVerificationEmailTemplate
	NextToken                        *string
}
