package shared

type LoadBalancer struct {
	ContainerName    *string `json:"containerName"`
	ContainerPort    *int64  `json:"containerPort"`
	LoadBalancerName *string `json:"loadBalancerName"`
	TargetGroupArn   *string `json:"targetGroupArn"`
}
