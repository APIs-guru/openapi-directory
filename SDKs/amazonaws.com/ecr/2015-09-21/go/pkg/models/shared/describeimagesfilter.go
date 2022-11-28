package shared

// DescribeImagesFilter
// An object representing a filter on a <a>DescribeImages</a> operation.
type DescribeImagesFilter struct {
	TagStatus *TagStatusEnum `json:"tagStatus,omitempty"`
}
