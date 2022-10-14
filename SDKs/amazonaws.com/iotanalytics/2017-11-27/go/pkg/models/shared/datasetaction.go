package shared

type DatasetAction struct {
	ActionName      *string                 `json:"actionName,omitempty"`
	ContainerAction *ContainerDatasetAction `json:"containerAction,omitempty"`
	QueryAction     *SQLQueryDatasetAction  `json:"queryAction,omitempty"`
}
