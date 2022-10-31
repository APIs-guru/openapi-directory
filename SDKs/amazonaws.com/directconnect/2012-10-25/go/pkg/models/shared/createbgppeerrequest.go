package shared



type CreateBgpPeerRequest struct {
    NewBgpPeer *NewBgpPeer `json:"newBGPPeer,omitempty"`
    VirtualInterfaceID *string `json:"virtualInterfaceId,omitempty"`
    
}

