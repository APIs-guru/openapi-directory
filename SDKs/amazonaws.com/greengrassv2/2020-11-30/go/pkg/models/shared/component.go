package shared

type Component struct {
	Arn           *string                 `json:"arn,omitempty"`
	ComponentName *string                 `json:"componentName,omitempty"`
	LatestVersion *ComponentLatestVersion `json:"latestVersion,omitempty"`
}
