package shared

// EndpointDetails
// Information about the endpoint details.
type EndpointDetails struct {
	Endpoint        *DataflowEndpoint `json:"endpoint,omitempty"`
	SecurityDetails *SecurityDetails  `json:"securityDetails,omitempty"`
}
