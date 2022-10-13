package shared

type DirectConnectGatewayAttachment struct {
	AttachmentState              *DirectConnectGatewayAttachmentStateEnum `json:"attachmentState"`
	AttachmentType               *DirectConnectGatewayAttachmentTypeEnum  `json:"attachmentType"`
	DirectConnectGatewayID       *string                                  `json:"directConnectGatewayId"`
	StateChangeError             *string                                  `json:"stateChangeError"`
	VirtualInterfaceID           *string                                  `json:"virtualInterfaceId"`
	VirtualInterfaceOwnerAccount *string                                  `json:"virtualInterfaceOwnerAccount"`
	VirtualInterfaceRegion       *string                                  `json:"virtualInterfaceRegion"`
}
