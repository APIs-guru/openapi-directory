package shared



type StartBgpFailoverTestRequest struct {
    BgpPeers []string `json:"bgpPeers,omitempty"`
    TestDurationInMinutes *int64 `json:"testDurationInMinutes,omitempty"`
    VirtualInterfaceID string `json:"virtualInterfaceId"`
    
}

