package shared

type GetDelegationsResponse struct {
	Delegations []DelegationMetadata `json:"delegations"`
	NextToken   *string              `json:"nextToken"`
}
