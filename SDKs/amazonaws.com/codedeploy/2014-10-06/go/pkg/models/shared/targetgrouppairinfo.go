package shared

type TargetGroupPairInfo struct {
	ProdTrafficRoute *TrafficRoute     `json:"prodTrafficRoute,omitempty"`
	TargetGroups     []TargetGroupInfo `json:"targetGroups,omitempty"`
	TestTrafficRoute *TrafficRoute     `json:"testTrafficRoute,omitempty"`
}
