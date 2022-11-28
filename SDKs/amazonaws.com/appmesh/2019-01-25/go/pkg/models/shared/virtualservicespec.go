package shared

// VirtualServiceSpec
// An object that represents the specification of a virtual service.
type VirtualServiceSpec struct {
	Provider *VirtualServiceProvider `json:"provider,omitempty"`
}
