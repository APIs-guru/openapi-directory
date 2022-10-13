package shared

type ListVirtualServicesOutput struct {
	NextToken       *string             `json:"nextToken"`
	VirtualServices []VirtualServiceRef `json:"virtualServices"`
}
