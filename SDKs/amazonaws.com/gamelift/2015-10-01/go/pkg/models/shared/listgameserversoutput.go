package shared



type ListGameServersOutput struct {
    GameServers []GameServer `json:"GameServers,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

