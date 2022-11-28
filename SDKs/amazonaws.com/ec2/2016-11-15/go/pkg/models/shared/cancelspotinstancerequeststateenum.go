package shared

type CancelSpotInstanceRequestStateEnum string

const (
	CancelSpotInstanceRequestStateEnumActive    CancelSpotInstanceRequestStateEnum = "active"
	CancelSpotInstanceRequestStateEnumOpen      CancelSpotInstanceRequestStateEnum = "open"
	CancelSpotInstanceRequestStateEnumClosed    CancelSpotInstanceRequestStateEnum = "closed"
	CancelSpotInstanceRequestStateEnumCancelled CancelSpotInstanceRequestStateEnum = "cancelled"
	CancelSpotInstanceRequestStateEnumCompleted CancelSpotInstanceRequestStateEnum = "completed"
)
