package shared

// DatasetAction
// A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.
type DatasetAction struct {
	ActionName      *string                 `json:"actionName,omitempty"`
	ContainerAction *ContainerDatasetAction `json:"containerAction,omitempty"`
	QueryAction     *SQLQueryDatasetAction  `json:"queryAction,omitempty"`
}
