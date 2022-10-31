package shared



type SourceFlowConfig struct {
    ConnectorProfileName *string `json:"connectorProfileName,omitempty"`
    ConnectorType ConnectorTypeEnum `json:"connectorType"`
    IncrementalPullConfig *IncrementalPullConfig `json:"incrementalPullConfig,omitempty"`
    SourceConnectorProperties SourceConnectorProperties `json:"sourceConnectorProperties"`
    
}

