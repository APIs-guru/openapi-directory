package shared

// KubernetesNetworkConfigResponse
// The Kubernetes network configuration for the cluster.
type KubernetesNetworkConfigResponse struct {
	ServiceIpv4Cidr *string `json:"serviceIpv4Cidr,omitempty"`
}
