package shared

type ListingStatusEnum string

const (
	ListingStatusEnumActive    ListingStatusEnum = "active"
	ListingStatusEnumPending   ListingStatusEnum = "pending"
	ListingStatusEnumCancelled ListingStatusEnum = "cancelled"
	ListingStatusEnumClosed    ListingStatusEnum = "closed"
)
