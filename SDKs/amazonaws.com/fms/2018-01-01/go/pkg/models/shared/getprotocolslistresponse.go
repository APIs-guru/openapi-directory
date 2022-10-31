package shared



type GetProtocolsListResponse struct {
    ProtocolsList *ProtocolsListData `json:"ProtocolsList,omitempty"`
    ProtocolsListArn *string `json:"ProtocolsListArn,omitempty"`
    
}

