package shared

type ListPolicyPrincipalsResponse struct {
	NextMarker *string  `json:"nextMarker"`
	Principals []string `json:"principals"`
}
