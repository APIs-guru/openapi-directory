package shared

// CreateApplicationInput
// Represents the input of a <code>CreateApplication</code> operation.
type CreateApplicationInput struct {
	ApplicationName string               `json:"applicationName"`
	ComputePlatform *ComputePlatformEnum `json:"computePlatform,omitempty"`
	Tags            []Tag                `json:"tags,omitempty"`
}
