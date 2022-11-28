package shared

import (
	"time"
)

// ReservedInstances
// Describes a Reserved Instance.
type ReservedInstances struct {
	AvailabilityZone    *string
	CurrencyCode        *CurrencyCodeValuesEnum
	Duration            *int64
	End                 *time.Time
	FixedPrice          *float32
	InstanceCount       *int64
	InstanceTenancy     *TenancyEnum
	InstanceType        *InstanceTypeEnum
	OfferingClass       *OfferingClassTypeEnum
	OfferingType        *OfferingTypeValuesEnum
	ProductDescription  *RiProductDescriptionEnum
	RecurringCharges    []RecurringCharge
	ReservedInstancesID *string
	Scope               *ScopeEnum
	Start               *time.Time
	State               *ReservedInstanceStateEnum
	Tags                []Tag
	UsagePrice          *float32
}
