package shared

type DatasetActionSummary struct {
	ActionName *string                `json:"actionName,omitempty"`
	ActionType *DatasetActionTypeEnum `json:"actionType,omitempty"`
}
