package shared

type VirtualServiceBackend struct {
	ClientPolicy       *ClientPolicy `json:"clientPolicy"`
	VirtualServiceName string        `json:"virtualServiceName"`
}
