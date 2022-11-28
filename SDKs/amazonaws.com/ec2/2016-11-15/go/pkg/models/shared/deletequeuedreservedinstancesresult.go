package shared

type DeleteQueuedReservedInstancesResult struct {
	FailedQueuedPurchaseDeletions     []FailedQueuedPurchaseDeletion
	SuccessfulQueuedPurchaseDeletions []SuccessfulQueuedPurchaseDeletion
}
