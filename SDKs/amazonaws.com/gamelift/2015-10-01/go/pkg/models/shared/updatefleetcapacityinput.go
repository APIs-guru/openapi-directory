package shared

// UpdateFleetCapacityInput
// Represents the input for a request operation.
type UpdateFleetCapacityInput struct {
	DesiredInstances *int64  `json:"DesiredInstances,omitempty"`
	FleetID          string  `json:"FleetId"`
	Location         *string `json:"Location,omitempty"`
	MaxSize          *int64  `json:"MaxSize,omitempty"`
	MinSize          *int64  `json:"MinSize,omitempty"`
}
