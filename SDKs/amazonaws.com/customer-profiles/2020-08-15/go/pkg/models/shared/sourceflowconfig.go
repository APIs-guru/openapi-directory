package shared

type SourceFlowConfig struct {
	ConnectorProfileName      *string                   `json:"ConnectorProfileName"`
	ConnectorType             SourceConnectorTypeEnum   `json:"ConnectorType"`
	IncrementalPullConfig     *IncrementalPullConfig    `json:"IncrementalPullConfig"`
	SourceConnectorProperties SourceConnectorProperties `json:"SourceConnectorProperties"`
}
