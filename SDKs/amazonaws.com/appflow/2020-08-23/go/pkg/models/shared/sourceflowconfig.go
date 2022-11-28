package shared

// SourceFlowConfig
//
//	Contains information about the configuration of the source connector used in the flow.
type SourceFlowConfig struct {
	ConnectorProfileName      *string                   `json:"connectorProfileName,omitempty"`
	ConnectorType             ConnectorTypeEnum         `json:"connectorType"`
	IncrementalPullConfig     *IncrementalPullConfig    `json:"incrementalPullConfig,omitempty"`
	SourceConnectorProperties SourceConnectorProperties `json:"sourceConnectorProperties"`
}
