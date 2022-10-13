package shared

type HTTPEndpointConfiguration struct {
	AccessKey *string `json:"AccessKey"`
	Name      *string `json:"Name"`
	URL       string  `json:"Url"`
}
