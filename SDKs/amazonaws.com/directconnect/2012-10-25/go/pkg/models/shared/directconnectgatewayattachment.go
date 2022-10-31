package shared



type DirectConnectGatewayAttachment struct {
    AttachmentState *DirectConnectGatewayAttachmentStateEnum `json:"attachmentState,omitempty"`
    AttachmentType *DirectConnectGatewayAttachmentTypeEnum `json:"attachmentType,omitempty"`
    DirectConnectGatewayID *string `json:"directConnectGatewayId,omitempty"`
    StateChangeError *string `json:"stateChangeError,omitempty"`
    VirtualInterfaceID *string `json:"virtualInterfaceId,omitempty"`
    VirtualInterfaceOwnerAccount *string `json:"virtualInterfaceOwnerAccount,omitempty"`
    VirtualInterfaceRegion *string `json:"virtualInterfaceRegion,omitempty"`
    
}

