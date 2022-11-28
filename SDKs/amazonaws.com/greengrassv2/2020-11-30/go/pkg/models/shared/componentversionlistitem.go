package shared

// ComponentVersionListItem
// Contains information about a component version in a list.
type ComponentVersionListItem struct {
	Arn              *string `json:"arn,omitempty"`
	ComponentName    *string `json:"componentName,omitempty"`
	ComponentVersion *string `json:"componentVersion,omitempty"`
}
