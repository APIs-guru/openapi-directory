package shared

type HTTPEndpointConfiguration struct {
	AccessKey *string `json:"AccessKey,omitempty"`
	Name      *string `json:"Name,omitempty"`
	URL       string  `json:"Url"`
}
