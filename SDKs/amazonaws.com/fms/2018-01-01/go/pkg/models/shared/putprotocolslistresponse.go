package shared

type PutProtocolsListResponse struct {
	ProtocolsList    *ProtocolsListData `json:"ProtocolsList,omitempty"`
	ProtocolsListArn *string            `json:"ProtocolsListArn,omitempty"`
}
