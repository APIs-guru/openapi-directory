package shared

// LoadBalancer
// <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p>
type LoadBalancer struct {
	ContainerName    *string `json:"containerName,omitempty"`
	ContainerPort    *int64  `json:"containerPort,omitempty"`
	LoadBalancerName *string `json:"loadBalancerName,omitempty"`
	TargetGroupArn   *string `json:"targetGroupArn,omitempty"`
}
