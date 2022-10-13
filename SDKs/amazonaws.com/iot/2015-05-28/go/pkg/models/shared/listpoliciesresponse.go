package shared

type ListPoliciesResponse struct {
	NextMarker *string  `json:"nextMarker"`
	Policies   []Policy `json:"policies"`
}
