package shared

type GetProtocolsListRequest struct {
	DefaultList *bool  `json:"DefaultList,omitempty"`
	ListID      string `json:"ListId"`
}
