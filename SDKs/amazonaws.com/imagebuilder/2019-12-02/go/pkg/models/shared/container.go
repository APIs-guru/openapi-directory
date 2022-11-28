package shared

// Container
// A container encapsulates the runtime environment for an application.
type Container struct {
	ImageUris []string `json:"imageUris,omitempty"`
	Region    *string  `json:"region,omitempty"`
}
