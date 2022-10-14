package shared

type ListPolicyGenerationsResponse struct {
	NextToken         *string            `json:"nextToken,omitempty"`
	PolicyGenerations []PolicyGeneration `json:"policyGenerations"`
}
