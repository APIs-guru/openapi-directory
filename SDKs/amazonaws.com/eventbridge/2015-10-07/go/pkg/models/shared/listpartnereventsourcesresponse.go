package shared

type ListPartnerEventSourcesResponse struct {
	NextToken           *string              `json:"NextToken"`
	PartnerEventSources []PartnerEventSource `json:"PartnerEventSources"`
}
