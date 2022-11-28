package shared

// PortMapping
// <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you are using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, exposed ports should be specified using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <note> <p>You cannot expose the same container port for multiple protocols. An error will be returned if this is attempted</p> </note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>
type PortMapping struct {
	ContainerPort *int64                 `json:"containerPort,omitempty"`
	HostPort      *int64                 `json:"hostPort,omitempty"`
	Protocol      *TransportProtocolEnum `json:"protocol,omitempty"`
}
