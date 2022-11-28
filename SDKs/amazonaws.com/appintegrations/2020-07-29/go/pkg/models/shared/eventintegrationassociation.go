package shared

// EventIntegrationAssociation
// The event integration association.
type EventIntegrationAssociation struct {
	ClientAssociationMetadata      map[string]string `json:"ClientAssociationMetadata,omitempty"`
	ClientID                       *string           `json:"ClientId,omitempty"`
	EventBridgeRuleName            *string           `json:"EventBridgeRuleName,omitempty"`
	EventIntegrationAssociationArn *string           `json:"EventIntegrationAssociationArn,omitempty"`
	EventIntegrationAssociationID  *string           `json:"EventIntegrationAssociationId,omitempty"`
	EventIntegrationName           *string           `json:"EventIntegrationName,omitempty"`
}
