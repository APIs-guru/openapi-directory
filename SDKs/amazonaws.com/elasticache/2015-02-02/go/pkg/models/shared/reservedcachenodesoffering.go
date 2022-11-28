package shared

// ReservedCacheNodesOffering
// Describes all of the attributes of a reserved cache node offering.
type ReservedCacheNodesOffering struct {
	CacheNodeType                *string
	Duration                     *int64
	FixedPrice                   *float64
	OfferingType                 *string
	ProductDescription           *string
	RecurringCharges             []RecurringCharge
	ReservedCacheNodesOfferingID *string
	UsagePrice                   *float64
}
