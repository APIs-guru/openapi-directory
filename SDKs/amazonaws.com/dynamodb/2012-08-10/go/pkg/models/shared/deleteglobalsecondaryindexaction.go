package shared

// DeleteGlobalSecondaryIndexAction
// Represents a global secondary index to be deleted from an existing table.
type DeleteGlobalSecondaryIndexAction struct {
	IndexName string `json:"IndexName"`
}
