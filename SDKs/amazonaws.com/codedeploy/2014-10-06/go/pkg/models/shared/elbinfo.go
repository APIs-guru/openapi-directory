package shared

// ElbInfo
// Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.
type ElbInfo struct {
	Name *string `json:"name,omitempty"`
}
