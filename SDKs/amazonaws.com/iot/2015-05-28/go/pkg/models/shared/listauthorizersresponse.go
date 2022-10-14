package shared

type ListAuthorizersResponse struct {
	Authorizers []AuthorizerSummary `json:"authorizers,omitempty"`
	NextMarker  *string             `json:"nextMarker,omitempty"`
}
