package shared

type DescribeCapacityProvidersRequest struct {
	CapacityProviders []string                    `json:"capacityProviders"`
	Include           []CapacityProviderFieldEnum `json:"include"`
	MaxResults        *int64                      `json:"maxResults"`
	NextToken         *string                     `json:"nextToken"`
}
