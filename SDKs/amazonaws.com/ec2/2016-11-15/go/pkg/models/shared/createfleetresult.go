package shared

type CreateFleetResult struct {
	Errors    []CreateFleetError
	FleetID   *string
	Instances []CreateFleetInstance
}
