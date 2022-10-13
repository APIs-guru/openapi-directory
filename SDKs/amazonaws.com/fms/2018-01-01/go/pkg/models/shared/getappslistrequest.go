package shared

type GetAppsListRequest struct {
	DefaultList *bool  `json:"DefaultList"`
	ListID      string `json:"ListId"`
}
