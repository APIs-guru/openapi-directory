package shared

// TrafficMirrorFilter
// Describes the Traffic Mirror filter.
type TrafficMirrorFilter struct {
	Description           *string
	EgressFilterRules     []TrafficMirrorFilterRule
	IngressFilterRules    []TrafficMirrorFilterRule
	NetworkServices       []TrafficMirrorNetworkServiceEnum
	Tags                  []Tag
	TrafficMirrorFilterID *string
}
