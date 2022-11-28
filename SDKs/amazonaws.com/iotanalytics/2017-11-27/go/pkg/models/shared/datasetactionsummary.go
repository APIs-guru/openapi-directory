package shared

// DatasetActionSummary
// Information about the action that automatically creates the dataset's contents.
type DatasetActionSummary struct {
	ActionName *string                `json:"actionName,omitempty"`
	ActionType *DatasetActionTypeEnum `json:"actionType,omitempty"`
}
