package shared

type ListVirtualNodesOutput struct {
	NextToken    *string          `json:"nextToken"`
	VirtualNodes []VirtualNodeRef `json:"virtualNodes"`
}
