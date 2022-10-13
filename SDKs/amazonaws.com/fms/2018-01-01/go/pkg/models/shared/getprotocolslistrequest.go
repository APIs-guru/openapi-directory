package shared

type GetProtocolsListRequest struct {
	DefaultList *bool  `json:"DefaultList"`
	ListID      string `json:"ListId"`
}
