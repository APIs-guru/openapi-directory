package shared

type UsagePlanKeys struct {
	Items    []UsagePlanKey `json:"items,omitempty"`
	Position *string        `json:"position,omitempty"`
}
