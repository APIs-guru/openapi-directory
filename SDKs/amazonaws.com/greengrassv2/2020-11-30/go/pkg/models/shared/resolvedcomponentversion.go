package shared

type ResolvedComponentVersion struct {
	Arn              *string `json:"arn"`
	ComponentName    *string `json:"componentName"`
	ComponentVersion *string `json:"componentVersion"`
	Recipe           *string `json:"recipe"`
}
