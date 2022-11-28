package shared

type DeleteFleetsResult struct {
	SuccessfulFleetDeletions   []DeleteFleetSuccessItem
	UnsuccessfulFleetDeletions []DeleteFleetErrorItem
}
