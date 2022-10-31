package shared

type DestinationFlowConfig struct {
	ConnectorProfileName           *string                        `json:"connectorProfileName,omitempty"`
	ConnectorType                  ConnectorTypeEnum              `json:"connectorType"`
	DestinationConnectorProperties DestinationConnectorProperties `json:"destinationConnectorProperties"`
}
