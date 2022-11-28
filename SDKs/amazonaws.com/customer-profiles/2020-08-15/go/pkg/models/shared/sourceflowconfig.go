package shared

// SourceFlowConfig
// Contains information about the configuration of the source connector used in the flow.
type SourceFlowConfig struct {
	ConnectorProfileName      *string                   `json:"ConnectorProfileName,omitempty"`
	ConnectorType             SourceConnectorTypeEnum   `json:"ConnectorType"`
	IncrementalPullConfig     *IncrementalPullConfig    `json:"IncrementalPullConfig,omitempty"`
	SourceConnectorProperties SourceConnectorProperties `json:"SourceConnectorProperties"`
}
