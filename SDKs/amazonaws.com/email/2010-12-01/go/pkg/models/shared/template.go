package shared

// Template
// The content of the email, composed of a subject line, an HTML part, and a text-only part.
type Template struct {
	HTMLPart     *string
	SubjectPart  *string
	TemplateName string
	TextPart     *string
}
