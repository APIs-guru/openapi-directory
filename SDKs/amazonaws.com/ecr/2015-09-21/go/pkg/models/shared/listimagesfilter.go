package shared

// ListImagesFilter
// An object representing a filter on a <a>ListImages</a> operation.
type ListImagesFilter struct {
	TagStatus *TagStatusEnum `json:"tagStatus,omitempty"`
}
