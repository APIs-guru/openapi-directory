package shared

// Connector
// Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
type Connector struct {
	ConnectorArn string            `json:"ConnectorArn"`
	ID           string            `json:"Id"`
	Parameters   map[string]string `json:"Parameters,omitempty"`
}
