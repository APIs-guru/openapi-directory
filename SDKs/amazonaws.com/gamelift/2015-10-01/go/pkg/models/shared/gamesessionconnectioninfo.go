package shared

type GameSessionConnectionInfo struct {
	DNSName               *string                `json:"DnsName,omitempty"`
	GameSessionArn        *string                `json:"GameSessionArn,omitempty"`
	IPAddress             *string                `json:"IpAddress,omitempty"`
	MatchedPlayerSessions []MatchedPlayerSession `json:"MatchedPlayerSessions,omitempty"`
	Port                  *int64                 `json:"Port,omitempty"`
}
