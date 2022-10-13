package shared

type ListVirtualInterfaceTestHistoryRequest struct {
	BgpPeers           []string `json:"bgpPeers"`
	MaxResults         *int64   `json:"maxResults"`
	NextToken          *string  `json:"nextToken"`
	Status             *string  `json:"status"`
	TestID             *string  `json:"testId"`
	VirtualInterfaceID *string  `json:"virtualInterfaceId"`
}
