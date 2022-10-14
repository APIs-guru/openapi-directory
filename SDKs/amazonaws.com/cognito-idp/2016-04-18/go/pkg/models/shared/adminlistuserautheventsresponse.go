package shared

type AdminListUserAuthEventsResponse struct {
	AuthEvents []AuthEventType `json:"AuthEvents,omitempty"`
	NextToken  *string         `json:"NextToken,omitempty"`
}
