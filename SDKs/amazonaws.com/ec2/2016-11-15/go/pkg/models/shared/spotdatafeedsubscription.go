package shared

// SpotDatafeedSubscription
// Describes the data feed for a Spot Instance.
type SpotDatafeedSubscription struct {
	Bucket  *string
	Fault   *SpotInstanceStateFault
	OwnerID *string
	Prefix  *string
	State   *DatafeedSubscriptionStateEnum
}
