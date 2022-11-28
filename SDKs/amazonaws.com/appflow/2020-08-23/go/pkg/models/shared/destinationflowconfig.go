package shared

// DestinationFlowConfig
//
//	Contains information about the configuration of destination connectors present in the flow.
type DestinationFlowConfig struct {
	ConnectorProfileName           *string                        `json:"connectorProfileName,omitempty"`
	ConnectorType                  ConnectorTypeEnum              `json:"connectorType"`
	DestinationConnectorProperties DestinationConnectorProperties `json:"destinationConnectorProperties"`
}
