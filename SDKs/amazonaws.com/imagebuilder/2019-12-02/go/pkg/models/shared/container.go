package shared

type Container struct {
	ImageUris []string `json:"imageUris,omitempty"`
	Region    *string  `json:"region,omitempty"`
}
