package shared

type ListAttachedPoliciesResponse struct {
	NextMarker *string  `json:"nextMarker"`
	Policies   []Policy `json:"policies"`
}
