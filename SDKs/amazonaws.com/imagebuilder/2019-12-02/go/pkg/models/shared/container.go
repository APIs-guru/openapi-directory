package shared

type Container struct {
	ImageUris []string `json:"imageUris"`
	Region    *string  `json:"region"`
}
