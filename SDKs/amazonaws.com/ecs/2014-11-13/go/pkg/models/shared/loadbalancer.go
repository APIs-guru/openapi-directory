package shared

type LoadBalancer struct {
	ContainerName    *string `json:"containerName,omitempty"`
	ContainerPort    *int64  `json:"containerPort,omitempty"`
	LoadBalancerName *string `json:"loadBalancerName,omitempty"`
	TargetGroupArn   *string `json:"targetGroupArn,omitempty"`
}
