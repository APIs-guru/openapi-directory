package shared

// TagDescription
// The tags associated with a load balancer.
type TagDescription struct {
	LoadBalancerName *string
	Tags             []Tag
}
