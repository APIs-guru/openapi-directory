package shared

type ScalingRule struct {
	Action      ScalingAction  `json:"Action"`
	Description *string        `json:"Description"`
	Name        string         `json:"Name"`
	Trigger     ScalingTrigger `json:"Trigger"`
}
