package shared

// LoadBalancerInfo
// Information about the Elastic Load Balancing load balancer or target group used in a deployment.
type LoadBalancerInfo struct {
	ElbInfoList             []ElbInfo             `json:"elbInfoList,omitempty"`
	TargetGroupInfoList     []TargetGroupInfo     `json:"targetGroupInfoList,omitempty"`
	TargetGroupPairInfoList []TargetGroupPairInfo `json:"targetGroupPairInfoList,omitempty"`
}
