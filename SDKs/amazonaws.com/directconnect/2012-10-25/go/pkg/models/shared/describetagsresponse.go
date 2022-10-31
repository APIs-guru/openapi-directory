package shared

type DescribeTagsResponse struct {
	ResourceTags []ResourceTag `json:"resourceTags,omitempty"`
}
