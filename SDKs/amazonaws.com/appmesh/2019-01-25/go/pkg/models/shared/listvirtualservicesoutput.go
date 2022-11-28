package shared

// ListVirtualServicesOutput
// <zonbook></zonbook><xhtml></xhtml>
type ListVirtualServicesOutput struct {
	NextToken       *string             `json:"nextToken,omitempty"`
	VirtualServices []VirtualServiceRef `json:"virtualServices"`
}
