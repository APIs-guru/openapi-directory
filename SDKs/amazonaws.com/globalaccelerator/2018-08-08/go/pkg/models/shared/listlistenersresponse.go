package shared

type ListListenersResponse struct {
	Listeners []Listener `json:"Listeners"`
	NextToken *string    `json:"NextToken"`
}
