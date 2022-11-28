package shared

// LoadBalancerDescription
// Describes the details of a LoadBalancer.
type LoadBalancerDescription struct {
	Domain           *string
	Listeners        []Listener
	LoadBalancerName *string
}
