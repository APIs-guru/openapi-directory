package shared

// TargetGroupPairInfo
//
//	Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.
type TargetGroupPairInfo struct {
	ProdTrafficRoute *TrafficRoute     `json:"prodTrafficRoute,omitempty"`
	TargetGroups     []TargetGroupInfo `json:"targetGroups,omitempty"`
	TestTrafficRoute *TrafficRoute     `json:"testTrafficRoute,omitempty"`
}
