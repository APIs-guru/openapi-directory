package shared



type LoadBalancerInfo struct {
    ElbInfoList []ElbInfo `json:"elbInfoList,omitempty"`
    TargetGroupInfoList []TargetGroupInfo `json:"targetGroupInfoList,omitempty"`
    TargetGroupPairInfoList []TargetGroupPairInfo `json:"targetGroupPairInfoList,omitempty"`
    
}

