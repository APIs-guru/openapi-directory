package shared

type GetEventSelectorsResponse struct {
	AdvancedEventSelectors []AdvancedEventSelector `json:"AdvancedEventSelectors,omitempty"`
	EventSelectors         []EventSelector         `json:"EventSelectors,omitempty"`
	TrailArn               *string                 `json:"TrailARN,omitempty"`
}
