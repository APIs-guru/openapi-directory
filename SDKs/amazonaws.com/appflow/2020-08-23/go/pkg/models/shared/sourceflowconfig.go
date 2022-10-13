package shared

type SourceFlowConfig struct {
	ConnectorProfileName      *string                   `json:"connectorProfileName"`
	ConnectorType             ConnectorTypeEnum         `json:"connectorType"`
	IncrementalPullConfig     *IncrementalPullConfig    `json:"incrementalPullConfig"`
	SourceConnectorProperties SourceConnectorProperties `json:"sourceConnectorProperties"`
}
