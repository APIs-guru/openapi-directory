package shared

// FailedQueuedPurchaseDeletion
// Describes a Reserved Instance whose queued purchase was not deleted.
type FailedQueuedPurchaseDeletion struct {
	Error               *DeleteQueuedReservedInstancesError
	ReservedInstancesID *string
}
