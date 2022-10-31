package shared



type PutEventSelectorsRequest struct {
    AdvancedEventSelectors []AdvancedEventSelector `json:"AdvancedEventSelectors,omitempty"`
    EventSelectors []EventSelector `json:"EventSelectors,omitempty"`
    TrailName string `json:"TrailName"`
    
}

