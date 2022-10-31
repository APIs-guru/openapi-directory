package shared

type KubernetesNetworkConfigResponse struct {
	ServiceIpv4Cidr *string `json:"serviceIpv4Cidr,omitempty"`
}
