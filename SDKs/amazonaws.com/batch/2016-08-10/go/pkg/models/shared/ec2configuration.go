package shared

type Ec2Configuration struct {
	ImageIDOverride *string `json:"imageIdOverride,omitempty"`
	ImageType       string  `json:"imageType"`
}
