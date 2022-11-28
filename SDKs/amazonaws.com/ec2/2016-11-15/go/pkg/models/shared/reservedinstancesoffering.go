package shared

// ReservedInstancesOffering
// Describes a Reserved Instance offering.
type ReservedInstancesOffering struct {
	AvailabilityZone            *string
	CurrencyCode                *CurrencyCodeValuesEnum
	Duration                    *int64
	FixedPrice                  *float32
	InstanceTenancy             *TenancyEnum
	InstanceType                *InstanceTypeEnum
	Marketplace                 *bool
	OfferingClass               *OfferingClassTypeEnum
	OfferingType                *OfferingTypeValuesEnum
	PricingDetails              []PricingDetail
	ProductDescription          *RiProductDescriptionEnum
	RecurringCharges            []RecurringCharge
	ReservedInstancesOfferingID *string
	Scope                       *ScopeEnum
	UsagePrice                  *float32
}
