package shared

type DescribeCapacityProvidersRequest struct {
	CapacityProviders []string                    `json:"capacityProviders,omitempty"`
	Include           []CapacityProviderFieldEnum `json:"include,omitempty"`
	MaxResults        *int64                      `json:"maxResults,omitempty"`
	NextToken         *string                     `json:"nextToken,omitempty"`
}
