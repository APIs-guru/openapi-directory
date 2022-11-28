package shared

// EgressFilter
// An object that represents the egress filter rules for a service mesh.
type EgressFilter struct {
	Type EgressFilterTypeEnum `json:"type"`
}
