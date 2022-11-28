package shared

// InvalidAttachmentException
// Indicates that an attempt to attach an object with the same link name or to apply a schema with the same name has occurred. Rename the link or the schema and then try again.
type InvalidAttachmentException struct {
	Message *string `json:"Message,omitempty"`
}
