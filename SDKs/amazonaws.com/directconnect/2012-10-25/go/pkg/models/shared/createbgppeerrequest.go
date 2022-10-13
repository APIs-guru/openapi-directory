package shared

type CreateBgpPeerRequest struct {
	NewBgpPeer         *NewBgpPeer `json:"newBGPPeer"`
	VirtualInterfaceID *string     `json:"virtualInterfaceId"`
}
