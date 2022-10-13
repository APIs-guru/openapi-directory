package shared

type ListPolicyGenerationsResponse struct {
	NextToken         *string            `json:"nextToken"`
	PolicyGenerations []PolicyGeneration `json:"policyGenerations"`
}
