package shared

type SourceFlowConfig struct {
	ConnectorProfileName      *string                   `json:"ConnectorProfileName,omitempty"`
	ConnectorType             SourceConnectorTypeEnum   `json:"ConnectorType"`
	IncrementalPullConfig     *IncrementalPullConfig    `json:"IncrementalPullConfig,omitempty"`
	SourceConnectorProperties SourceConnectorProperties `json:"SourceConnectorProperties"`
}
