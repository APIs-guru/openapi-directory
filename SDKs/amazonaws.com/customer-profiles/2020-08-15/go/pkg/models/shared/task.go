package shared

type Task struct {
	ConnectorOperator *ConnectorOperator `json:"ConnectorOperator"`
	DestinationField  *string            `json:"DestinationField"`
	SourceFields      []string           `json:"SourceFields"`
	TaskProperties    map[string]string  `json:"TaskProperties"`
	TaskType          TaskTypeEnum       `json:"TaskType"`
}
