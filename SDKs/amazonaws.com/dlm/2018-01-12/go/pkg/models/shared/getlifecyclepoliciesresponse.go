package shared

type GetLifecyclePoliciesResponse struct {
	Policies []LifecyclePolicySummary `json:"Policies,omitempty"`
}
