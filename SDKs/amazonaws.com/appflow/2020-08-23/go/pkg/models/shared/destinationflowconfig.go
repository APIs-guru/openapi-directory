package shared

type DestinationFlowConfig struct {
	ConnectorProfileName           *string                        `json:"connectorProfileName"`
	ConnectorType                  ConnectorTypeEnum              `json:"connectorType"`
	DestinationConnectorProperties DestinationConnectorProperties `json:"destinationConnectorProperties"`
}
