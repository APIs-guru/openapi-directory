package shared

// StartMatchmakingInput
// Represents the input for a request operation.
type StartMatchmakingInput struct {
	ConfigurationName string   `json:"ConfigurationName"`
	Players           []Player `json:"Players"`
	TicketID          *string  `json:"TicketId,omitempty"`
}
