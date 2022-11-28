package shared

// CancelSpotFleetRequestsResponse
// Contains the output of CancelSpotFleetRequests.
type CancelSpotFleetRequestsResponse struct {
	SuccessfulFleetRequests   []CancelSpotFleetRequestsSuccessItem
	UnsuccessfulFleetRequests []CancelSpotFleetRequestsErrorItem
}
