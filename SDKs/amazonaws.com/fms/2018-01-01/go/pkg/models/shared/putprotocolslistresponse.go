package shared

type PutProtocolsListResponse struct {
	ProtocolsList    *ProtocolsListData `json:"ProtocolsList"`
	ProtocolsListArn *string            `json:"ProtocolsListArn"`
}
