package shared

type UpdateFleetCapacityInput struct {
	DesiredInstances *int64  `json:"DesiredInstances"`
	FleetID          string  `json:"FleetId"`
	Location         *string `json:"Location"`
	MaxSize          *int64  `json:"MaxSize"`
	MinSize          *int64  `json:"MinSize"`
}
