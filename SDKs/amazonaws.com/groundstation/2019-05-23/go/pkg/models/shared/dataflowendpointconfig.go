package shared

// DataflowEndpointConfig
// Information about the dataflow endpoint <code>Config</code>.
type DataflowEndpointConfig struct {
	DataflowEndpointName   string  `json:"dataflowEndpointName"`
	DataflowEndpointRegion *string `json:"dataflowEndpointRegion,omitempty"`
}
