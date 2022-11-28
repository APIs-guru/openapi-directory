package shared

// ResolvedComponentVersion
// Contains information about a component version that is compatible to run on a Greengrass core device.
type ResolvedComponentVersion struct {
	Arn              *string `json:"arn,omitempty"`
	ComponentName    *string `json:"componentName,omitempty"`
	ComponentVersion *string `json:"componentVersion,omitempty"`
	Recipe           *string `json:"recipe,omitempty"`
}
