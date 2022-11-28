package shared

// CancelSpotFleetRequestsErrorItem
// Describes a Spot Fleet request that was not successfully canceled.
type CancelSpotFleetRequestsErrorItem struct {
	Error              *CancelSpotFleetRequestsError
	SpotFleetRequestID *string
}
