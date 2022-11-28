package shared

// AcceptMatchInput
// Represents the input for a request operation.
type AcceptMatchInput struct {
	AcceptanceType AcceptanceTypeEnum `json:"AcceptanceType"`
	PlayerIds      []string           `json:"PlayerIds"`
	TicketID       string             `json:"TicketId"`
}
