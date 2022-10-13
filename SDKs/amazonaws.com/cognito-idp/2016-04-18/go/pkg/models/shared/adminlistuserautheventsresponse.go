package shared

type AdminListUserAuthEventsResponse struct {
	AuthEvents []AuthEventType `json:"AuthEvents"`
	NextToken  *string         `json:"NextToken"`
}
