package shared

// ContentTypeProfileConfig
// The configuration for a field-level encryption content type-profile mapping.
type ContentTypeProfileConfig struct {
	ContentTypeProfiles             *ContentTypeProfiles
	ForwardWhenContentTypeIsUnknown bool
}
