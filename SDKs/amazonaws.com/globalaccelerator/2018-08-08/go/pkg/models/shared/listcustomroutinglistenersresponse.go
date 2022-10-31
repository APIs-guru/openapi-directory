package shared



type ListCustomRoutingListenersResponse struct {
    Listeners []CustomRoutingListener `json:"Listeners,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

