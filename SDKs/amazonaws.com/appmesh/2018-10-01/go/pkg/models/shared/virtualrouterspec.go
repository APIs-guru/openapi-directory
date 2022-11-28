package shared

// VirtualRouterSpec
// An object representing the specification of a virtual router.
type VirtualRouterSpec struct {
	ServiceNames []string `json:"serviceNames,omitempty"`
}
