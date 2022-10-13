package shared

type DatasetActionSummary struct {
	ActionName *string                `json:"actionName"`
	ActionType *DatasetActionTypeEnum `json:"actionType"`
}
