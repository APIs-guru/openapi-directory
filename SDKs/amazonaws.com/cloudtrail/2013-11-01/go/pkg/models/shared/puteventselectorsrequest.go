package shared

type PutEventSelectorsRequest struct {
	AdvancedEventSelectors []AdvancedEventSelector `json:"AdvancedEventSelectors"`
	EventSelectors         []EventSelector         `json:"EventSelectors"`
	TrailName              string                  `json:"TrailName"`
}
