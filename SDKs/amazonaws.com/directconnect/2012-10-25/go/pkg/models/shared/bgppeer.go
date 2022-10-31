package shared



type BgpPeer struct {
    AddressFamily *AddressFamilyEnum `json:"addressFamily,omitempty"`
    AmazonAddress *string `json:"amazonAddress,omitempty"`
    Asn *int64 `json:"asn,omitempty"`
    AuthKey *string `json:"authKey,omitempty"`
    AwsDeviceV2 *string `json:"awsDeviceV2,omitempty"`
    AwsLogicalDeviceID *string `json:"awsLogicalDeviceId,omitempty"`
    BgpPeerID *string `json:"bgpPeerId,omitempty"`
    BgpPeerState *BgpPeerStateEnum `json:"bgpPeerState,omitempty"`
    BgpStatus *BgpStatusEnum `json:"bgpStatus,omitempty"`
    CustomerAddress *string `json:"customerAddress,omitempty"`
    
}

