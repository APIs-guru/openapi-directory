package shared

type PutEventSelectorsResponse struct {
	AdvancedEventSelectors []AdvancedEventSelector `json:"AdvancedEventSelectors"`
	EventSelectors         []EventSelector         `json:"EventSelectors"`
	TrailArn               *string                 `json:"TrailARN"`
}
