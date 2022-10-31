package shared



type ListVirtualNodesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    VirtualNodes []VirtualNodeRef `json:"virtualNodes"`
    
}

