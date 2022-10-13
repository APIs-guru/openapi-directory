package shared

type GameSessionConnectionInfo struct {
	DNSName               *string                `json:"DnsName"`
	GameSessionArn        *string                `json:"GameSessionArn"`
	IPAddress             *string                `json:"IpAddress"`
	MatchedPlayerSessions []MatchedPlayerSession `json:"MatchedPlayerSessions"`
	Port                  *int64                 `json:"Port"`
}
