package shared

type StartBgpFailoverTestRequest struct {
	BgpPeers              []string `json:"bgpPeers"`
	TestDurationInMinutes *int64   `json:"testDurationInMinutes"`
	VirtualInterfaceID    string   `json:"virtualInterfaceId"`
}
