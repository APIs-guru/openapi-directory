package shared

// TargetGroupInfo
// Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group.
type TargetGroupInfo struct {
	Name *string `json:"name,omitempty"`
}
