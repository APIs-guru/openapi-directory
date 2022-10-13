package shared

type UsagePlans struct {
	Items    []UsagePlan `json:"items"`
	Position *string     `json:"position"`
}
