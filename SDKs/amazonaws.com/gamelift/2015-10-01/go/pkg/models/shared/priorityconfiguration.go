package shared

type PriorityConfiguration struct {
	LocationOrder []string           `json:"LocationOrder"`
	PriorityOrder []PriorityTypeEnum `json:"PriorityOrder"`
}
