package shared

type ListListenersResponse struct {
	Listeners []Listener `json:"Listeners,omitempty"`
	NextToken *string    `json:"NextToken,omitempty"`
}
