package shared

type Component struct {
	Arn           *string                 `json:"arn"`
	ComponentName *string                 `json:"componentName"`
	LatestVersion *ComponentLatestVersion `json:"latestVersion"`
}
