package shared

type OpenTunnelResponse struct {
	DestinationAccessToken *string `json:"destinationAccessToken"`
	SourceAccessToken      *string `json:"sourceAccessToken"`
	TunnelArn              *string `json:"tunnelArn"`
	TunnelID               *string `json:"tunnelId"`
}
