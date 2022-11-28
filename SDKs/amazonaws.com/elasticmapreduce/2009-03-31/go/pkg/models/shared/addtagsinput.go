package shared

// AddTagsInput
// This input identifies an Amazon EMR resource and a list of tags to attach.
type AddTagsInput struct {
	ResourceID string `json:"ResourceId"`
	Tags       []Tag  `json:"Tags"`
}
