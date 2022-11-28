package shared

// StartMatchBackfillInput
// Represents the input for a request operation.
type StartMatchBackfillInput struct {
	ConfigurationName string   `json:"ConfigurationName"`
	GameSessionArn    *string  `json:"GameSessionArn,omitempty"`
	Players           []Player `json:"Players"`
	TicketID          *string  `json:"TicketId,omitempty"`
}
