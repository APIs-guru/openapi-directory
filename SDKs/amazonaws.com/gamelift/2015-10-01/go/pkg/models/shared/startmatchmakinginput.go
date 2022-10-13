package shared

type StartMatchmakingInput struct {
	ConfigurationName string   `json:"ConfigurationName"`
	Players           []Player `json:"Players"`
	TicketID          *string  `json:"TicketId"`
}
