package shared

// StorageConnector
// Describes a connector that enables persistent storage for users.
type StorageConnector struct {
	ConnectorType      StorageConnectorTypeEnum `json:"ConnectorType"`
	Domains            []string                 `json:"Domains,omitempty"`
	ResourceIdentifier *string                  `json:"ResourceIdentifier,omitempty"`
}
