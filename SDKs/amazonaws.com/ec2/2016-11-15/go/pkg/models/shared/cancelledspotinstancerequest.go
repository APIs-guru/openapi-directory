package shared

// CancelledSpotInstanceRequest
// Describes a request to cancel a Spot Instance.
type CancelledSpotInstanceRequest struct {
	SpotInstanceRequestID *string
	State                 *CancelSpotInstanceRequestStateEnum
}
