package shared

type DataflowEndpointConfig struct {
	DataflowEndpointName   string  `json:"dataflowEndpointName"`
	DataflowEndpointRegion *string `json:"dataflowEndpointRegion"`
}
