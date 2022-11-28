package shared

// ResourceTag
// Information about a tag associated with an Direct Connect resource.
type ResourceTag struct {
	ResourceArn *string `json:"resourceArn,omitempty"`
	Tags        []Tag   `json:"tags,omitempty"`
}
