package shared

// Task
//
//	A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>.
type Task struct {
	ConnectorOperator *ConnectorOperator `json:"connectorOperator,omitempty"`
	DestinationField  *string            `json:"destinationField,omitempty"`
	SourceFields      []string           `json:"sourceFields"`
	TaskProperties    map[string]string  `json:"taskProperties,omitempty"`
	TaskType          TaskTypeEnum       `json:"taskType"`
}
