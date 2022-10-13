package shared

type DescribeCapacityProvidersResponse struct {
	CapacityProviders []CapacityProvider `json:"capacityProviders"`
	Failures          []Failure          `json:"failures"`
	NextToken         *string            `json:"nextToken"`
}
