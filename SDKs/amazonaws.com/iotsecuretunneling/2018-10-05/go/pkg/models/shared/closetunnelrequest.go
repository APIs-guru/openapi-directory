package shared

type CloseTunnelRequest struct {
	Delete   *bool  `json:"delete,omitempty"`
	TunnelID string `json:"tunnelId"`
}
