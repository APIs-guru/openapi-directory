package shared

// VirtualRouterSpec
// An object that represents the specification of a virtual router.
type VirtualRouterSpec struct {
	Listeners []VirtualRouterListener `json:"listeners,omitempty"`
}
