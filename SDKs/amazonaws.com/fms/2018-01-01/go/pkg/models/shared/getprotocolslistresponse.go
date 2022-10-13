package shared

type GetProtocolsListResponse struct {
	ProtocolsList    *ProtocolsListData `json:"ProtocolsList"`
	ProtocolsListArn *string            `json:"ProtocolsListArn"`
}
