package shared

// DeleteFleetErrorItem
// Describes an EC2 Fleet that was not successfully deleted.
type DeleteFleetErrorItem struct {
	Error   *DeleteFleetError
	FleetID *string
}
