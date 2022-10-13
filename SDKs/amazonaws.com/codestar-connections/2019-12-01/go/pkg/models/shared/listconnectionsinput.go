package shared

type ListConnectionsInput struct {
	HostArnFilter      *string           `json:"HostArnFilter"`
	MaxResults         *int64            `json:"MaxResults"`
	NextToken          *string           `json:"NextToken"`
	ProviderTypeFilter *ProviderTypeEnum `json:"ProviderTypeFilter"`
}
