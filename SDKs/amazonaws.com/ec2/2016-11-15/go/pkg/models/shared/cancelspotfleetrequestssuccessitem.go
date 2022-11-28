package shared

// CancelSpotFleetRequestsSuccessItem
// Describes a Spot Fleet request that was successfully canceled.
type CancelSpotFleetRequestsSuccessItem struct {
	CurrentSpotFleetRequestState  *BatchStateEnum
	PreviousSpotFleetRequestState *BatchStateEnum
	SpotFleetRequestID            *string
}
