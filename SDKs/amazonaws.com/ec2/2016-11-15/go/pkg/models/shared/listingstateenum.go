package shared

type ListingStateEnum string

const (
	ListingStateEnumAvailable ListingStateEnum = "available"
	ListingStateEnumSold      ListingStateEnum = "sold"
	ListingStateEnumCancelled ListingStateEnum = "cancelled"
	ListingStateEnumPending   ListingStateEnum = "pending"
)
