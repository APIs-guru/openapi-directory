package shared

type ListEventBusesResponse struct {
	EventBuses []EventBus `json:"EventBuses,omitempty"`
	NextToken  *string    `json:"NextToken,omitempty"`
}
