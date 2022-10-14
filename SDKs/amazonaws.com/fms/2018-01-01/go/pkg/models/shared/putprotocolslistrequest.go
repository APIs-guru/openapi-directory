package shared

type PutProtocolsListRequest struct {
	ProtocolsList ProtocolsListData `json:"ProtocolsList"`
	TagList       []Tag             `json:"TagList,omitempty"`
}
