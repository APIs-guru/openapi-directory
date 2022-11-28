package shared

// DeleteFleetSuccessItem
// Describes an EC2 Fleet that was successfully deleted.
type DeleteFleetSuccessItem struct {
	CurrentFleetState  *FleetStateCodeEnum
	FleetID            *string
	PreviousFleetState *FleetStateCodeEnum
}
