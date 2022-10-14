package shared

type UsagePlans struct {
	Items    []UsagePlan `json:"items,omitempty"`
	Position *string     `json:"position,omitempty"`
}
