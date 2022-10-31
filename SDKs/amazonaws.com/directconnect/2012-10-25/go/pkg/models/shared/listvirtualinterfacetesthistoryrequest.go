package shared



type ListVirtualInterfaceTestHistoryRequest struct {
    BgpPeers []string `json:"bgpPeers,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    Status *string `json:"status,omitempty"`
    TestID *string `json:"testId,omitempty"`
    VirtualInterfaceID *string `json:"virtualInterfaceId,omitempty"`
    
}

