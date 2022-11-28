package shared

// Task
// A class for modeling different type of tasks. Task implementation varies based on the TaskType.
type Task struct {
	ConnectorOperator *ConnectorOperator `json:"ConnectorOperator,omitempty"`
	DestinationField  *string            `json:"DestinationField,omitempty"`
	SourceFields      []string           `json:"SourceFields"`
	TaskProperties    map[string]string  `json:"TaskProperties,omitempty"`
	TaskType          TaskTypeEnum       `json:"TaskType"`
}
