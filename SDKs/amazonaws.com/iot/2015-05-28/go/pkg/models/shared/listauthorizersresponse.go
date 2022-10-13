package shared

type ListAuthorizersResponse struct {
	Authorizers []AuthorizerSummary `json:"authorizers"`
	NextMarker  *string             `json:"nextMarker"`
}
