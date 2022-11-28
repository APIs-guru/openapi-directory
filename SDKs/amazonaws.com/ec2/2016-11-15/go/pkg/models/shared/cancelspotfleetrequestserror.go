package shared

// CancelSpotFleetRequestsError
// Describes a Spot Fleet error.
type CancelSpotFleetRequestsError struct {
	Code    *CancelBatchErrorCodeEnum
	Message *string
}
