package shared

// BulkEmailDestinationStatus
// An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.
type BulkEmailDestinationStatus struct {
	Error     *string
	MessageID *string
	Status    *BulkEmailStatusEnum
}
