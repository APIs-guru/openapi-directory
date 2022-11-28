package shared

// ListVirtualNodesOutput
// <zonbook></zonbook><xhtml></xhtml>
type ListVirtualNodesOutput struct {
	NextToken    *string          `json:"nextToken,omitempty"`
	VirtualNodes []VirtualNodeRef `json:"virtualNodes"`
}
