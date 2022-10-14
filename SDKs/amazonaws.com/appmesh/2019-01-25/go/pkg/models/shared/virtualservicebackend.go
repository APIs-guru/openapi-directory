package shared

type VirtualServiceBackend struct {
	ClientPolicy       *ClientPolicy `json:"clientPolicy,omitempty"`
	VirtualServiceName string        `json:"virtualServiceName"`
}
