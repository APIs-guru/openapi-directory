package shared

type Usage struct {
	EndDate     *string              `json:"endDate"`
	Items       map[string][][]int64 `json:"items"`
	Position    *string              `json:"position"`
	StartDate   *string              `json:"startDate"`
	UsagePlanID *string              `json:"usagePlanId"`
}
