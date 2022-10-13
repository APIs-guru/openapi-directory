package shared

type TargetGroupPairInfo struct {
	ProdTrafficRoute *TrafficRoute     `json:"prodTrafficRoute"`
	TargetGroups     []TargetGroupInfo `json:"targetGroups"`
	TestTrafficRoute *TrafficRoute     `json:"testTrafficRoute"`
}
