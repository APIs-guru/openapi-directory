package shared



type ListVirtualInterfaceTestHistoryResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    VirtualInterfaceTestHistory []VirtualInterfaceTestHistory `json:"virtualInterfaceTestHistory,omitempty"`
    
}

