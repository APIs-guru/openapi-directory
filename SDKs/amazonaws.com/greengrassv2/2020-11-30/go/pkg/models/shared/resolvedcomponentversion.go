package shared

type ResolvedComponentVersion struct {
	Arn              *string `json:"arn,omitempty"`
	ComponentName    *string `json:"componentName,omitempty"`
	ComponentVersion *string `json:"componentVersion,omitempty"`
	Recipe           *string `json:"recipe,omitempty"`
}
