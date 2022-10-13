package shared

type LoadBalancerInfo struct {
	ElbInfoList             []ElbInfo             `json:"elbInfoList"`
	TargetGroupInfoList     []TargetGroupInfo     `json:"targetGroupInfoList"`
	TargetGroupPairInfoList []TargetGroupPairInfo `json:"targetGroupPairInfoList"`
}
