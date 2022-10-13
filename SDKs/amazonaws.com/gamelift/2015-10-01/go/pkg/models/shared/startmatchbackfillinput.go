package shared

type StartMatchBackfillInput struct {
	ConfigurationName string   `json:"ConfigurationName"`
	GameSessionArn    *string  `json:"GameSessionArn"`
	Players           []Player `json:"Players"`
	TicketID          *string  `json:"TicketId"`
}
