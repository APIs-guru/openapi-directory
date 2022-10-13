package shared

type DatasetAction struct {
	ActionName      *string                 `json:"actionName"`
	ContainerAction *ContainerDatasetAction `json:"containerAction"`
	QueryAction     *SQLQueryDatasetAction  `json:"queryAction"`
}
