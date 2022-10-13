package shared

type StorageConnector struct {
	ConnectorType      StorageConnectorTypeEnum `json:"ConnectorType"`
	Domains            []string                 `json:"Domains"`
	ResourceIdentifier *string                  `json:"ResourceIdentifier"`
}
