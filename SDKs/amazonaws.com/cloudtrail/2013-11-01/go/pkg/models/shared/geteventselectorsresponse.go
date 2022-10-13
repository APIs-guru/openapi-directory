package shared

type GetEventSelectorsResponse struct {
	AdvancedEventSelectors []AdvancedEventSelector `json:"AdvancedEventSelectors"`
	EventSelectors         []EventSelector         `json:"EventSelectors"`
	TrailArn               *string                 `json:"TrailARN"`
}
