package shared

type ListEventIntegrationAssociationsResponse struct {
	EventIntegrationAssociations []EventIntegrationAssociation `json:"EventIntegrationAssociations,omitempty"`
	NextToken                    *string                       `json:"NextToken,omitempty"`
}
