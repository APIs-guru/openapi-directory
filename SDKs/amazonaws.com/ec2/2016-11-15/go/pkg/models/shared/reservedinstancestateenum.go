package shared

type ReservedInstanceStateEnum string

const (
	ReservedInstanceStateEnumPaymentPending ReservedInstanceStateEnum = "payment-pending"
	ReservedInstanceStateEnumActive         ReservedInstanceStateEnum = "active"
	ReservedInstanceStateEnumPaymentFailed  ReservedInstanceStateEnum = "payment-failed"
	ReservedInstanceStateEnumRetired        ReservedInstanceStateEnum = "retired"
	ReservedInstanceStateEnumQueued         ReservedInstanceStateEnum = "queued"
	ReservedInstanceStateEnumQueuedDeleted  ReservedInstanceStateEnum = "queued-deleted"
)
