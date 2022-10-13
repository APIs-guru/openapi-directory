package shared

type CloseTunnelRequest struct {
	Delete   *bool  `json:"delete"`
	TunnelID string `json:"tunnelId"`
}
