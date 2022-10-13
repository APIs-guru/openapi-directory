package shared

type ListCustomRoutingListenersResponse struct {
	Listeners []CustomRoutingListener `json:"Listeners"`
	NextToken *string                 `json:"NextToken"`
}
