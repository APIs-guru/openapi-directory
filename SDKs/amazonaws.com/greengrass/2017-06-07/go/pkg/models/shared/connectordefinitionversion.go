package shared

// ConnectorDefinitionVersion
// Information about the connector definition version, which is a container for connectors.
type ConnectorDefinitionVersion struct {
	Connectors []Connector `json:"Connectors,omitempty"`
}
