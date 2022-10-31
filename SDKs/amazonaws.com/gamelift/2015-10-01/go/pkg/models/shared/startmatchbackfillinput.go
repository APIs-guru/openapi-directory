package shared



type StartMatchBackfillInput struct {
    ConfigurationName string `json:"ConfigurationName"`
    GameSessionArn *string `json:"GameSessionArn,omitempty"`
    Players []Player `json:"Players"`
    TicketID *string `json:"TicketId,omitempty"`
    
}

