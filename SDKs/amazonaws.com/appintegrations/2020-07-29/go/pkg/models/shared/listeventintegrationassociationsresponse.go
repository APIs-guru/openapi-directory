package shared

type ListEventIntegrationAssociationsResponse struct {
	EventIntegrationAssociations []EventIntegrationAssociation `json:"EventIntegrationAssociations"`
	NextToken                    *string                       `json:"NextToken"`
}
