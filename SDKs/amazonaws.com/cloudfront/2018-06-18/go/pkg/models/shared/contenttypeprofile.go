package shared

// ContentTypeProfile
// A field-level encryption content type profile.
type ContentTypeProfile struct {
	ContentType string
	Format      FormatEnum
	ProfileID   *string
}
