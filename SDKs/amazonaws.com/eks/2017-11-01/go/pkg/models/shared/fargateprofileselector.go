package shared

// FargateProfileSelector
// An object representing an Fargate profile selector.
type FargateProfileSelector struct {
	Labels    map[string]string `json:"labels,omitempty"`
	Namespace *string           `json:"namespace,omitempty"`
}
