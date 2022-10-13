package shared

type ListEventBusesResponse struct {
	EventBuses []EventBus `json:"EventBuses"`
	NextToken  *string    `json:"NextToken"`
}
