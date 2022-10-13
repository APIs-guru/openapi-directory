package shared

type ListPrincipalPoliciesResponse struct {
	NextMarker *string  `json:"nextMarker"`
	Policies   []Policy `json:"policies"`
}
