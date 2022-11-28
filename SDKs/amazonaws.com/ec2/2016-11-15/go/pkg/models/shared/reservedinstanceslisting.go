package shared

import (
	"time"
)

// ReservedInstancesListing
// Describes a Reserved Instance listing.
type ReservedInstancesListing struct {
	ClientToken                *string
	CreateDate                 *time.Time
	InstanceCounts             []InstanceCount
	PriceSchedules             []PriceSchedule
	ReservedInstancesID        *string
	ReservedInstancesListingID *string
	Status                     *ListingStatusEnum
	StatusMessage              *string
	Tags                       []Tag
	UpdateDate                 *time.Time
}
