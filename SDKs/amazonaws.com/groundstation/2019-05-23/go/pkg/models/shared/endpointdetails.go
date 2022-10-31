package shared

type EndpointDetails struct {
	Endpoint        *DataflowEndpoint `json:"endpoint,omitempty"`
	SecurityDetails *SecurityDetails  `json:"securityDetails,omitempty"`
}
