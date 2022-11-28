package shared

import (
	"time"
)

// ReservedInstancesModification
// Describes a Reserved Instance modification.
type ReservedInstancesModification struct {
	ClientToken                     *string
	CreateDate                      *time.Time
	EffectiveDate                   *time.Time
	ModificationResults             []ReservedInstancesModificationResult
	ReservedInstancesIds            []ReservedInstancesID
	ReservedInstancesModificationID *string
	Status                          *string
	StatusMessage                   *string
	UpdateDate                      *time.Time
}
