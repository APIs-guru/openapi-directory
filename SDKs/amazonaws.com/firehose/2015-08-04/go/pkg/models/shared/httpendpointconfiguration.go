package shared

// HTTPEndpointConfiguration
// Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
type HTTPEndpointConfiguration struct {
	AccessKey *string `json:"AccessKey,omitempty"`
	Name      *string `json:"Name,omitempty"`
	URL       string  `json:"Url"`
}
