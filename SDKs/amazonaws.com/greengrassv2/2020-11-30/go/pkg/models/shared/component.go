package shared

// Component
// Contains information about a component.
type Component struct {
	Arn           *string                 `json:"arn,omitempty"`
	ComponentName *string                 `json:"componentName,omitempty"`
	LatestVersion *ComponentLatestVersion `json:"latestVersion,omitempty"`
}
