package shared

type AcceptMatchInput struct {
	AcceptanceType AcceptanceTypeEnum `json:"AcceptanceType"`
	PlayerIds      []string           `json:"PlayerIds"`
	TicketID       string             `json:"TicketId"`
}
