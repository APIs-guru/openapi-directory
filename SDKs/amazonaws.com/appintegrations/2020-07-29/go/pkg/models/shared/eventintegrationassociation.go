package shared

type EventIntegrationAssociation struct {
	ClientAssociationMetadata      map[string]string `json:"ClientAssociationMetadata"`
	ClientID                       *string           `json:"ClientId"`
	EventBridgeRuleName            *string           `json:"EventBridgeRuleName"`
	EventIntegrationAssociationArn *string           `json:"EventIntegrationAssociationArn"`
	EventIntegrationAssociationID  *string           `json:"EventIntegrationAssociationId"`
	EventIntegrationName           *string           `json:"EventIntegrationName"`
}
