package shared

import (
	"time"
)

// ReservedCacheNode
// Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.
type ReservedCacheNode struct {
	CacheNodeCount               *int64
	CacheNodeType                *string
	Duration                     *int64
	FixedPrice                   *float64
	OfferingType                 *string
	ProductDescription           *string
	RecurringCharges             []RecurringCharge
	ReservationArn               *string
	ReservedCacheNodeID          *string
	ReservedCacheNodesOfferingID *string
	StartTime                    *time.Time
	State                        *string
	UsagePrice                   *float64
}
