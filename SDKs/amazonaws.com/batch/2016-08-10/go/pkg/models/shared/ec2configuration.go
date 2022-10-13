package shared

type Ec2Configuration struct {
	ImageIDOverride *string `json:"imageIdOverride"`
	ImageType       string  `json:"imageType"`
}
