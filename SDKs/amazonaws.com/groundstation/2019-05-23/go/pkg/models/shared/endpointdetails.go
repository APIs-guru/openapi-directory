package shared

type EndpointDetails struct {
	Endpoint        *DataflowEndpoint `json:"endpoint"`
	SecurityDetails *SecurityDetails  `json:"securityDetails"`
}
