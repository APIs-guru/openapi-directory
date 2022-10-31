package shared

type VirtualRouterSpec struct {
	Listeners []VirtualRouterListener `json:"listeners,omitempty"`
}
