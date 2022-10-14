package shared

type OpenTunnelResponse struct {
	DestinationAccessToken *string `json:"destinationAccessToken,omitempty"`
	SourceAccessToken      *string `json:"sourceAccessToken,omitempty"`
	TunnelArn              *string `json:"tunnelArn,omitempty"`
	TunnelID               *string `json:"tunnelId,omitempty"`
}
