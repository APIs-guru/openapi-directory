package shared

type StorageConnector struct {
	ConnectorType      StorageConnectorTypeEnum `json:"ConnectorType"`
	Domains            []string                 `json:"Domains,omitempty"`
	ResourceIdentifier *string                  `json:"ResourceIdentifier,omitempty"`
}
