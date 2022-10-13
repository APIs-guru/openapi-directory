package shared

type Task struct {
	ConnectorOperator *ConnectorOperator `json:"connectorOperator"`
	DestinationField  *string            `json:"destinationField"`
	SourceFields      []string           `json:"sourceFields"`
	TaskProperties    map[string]string  `json:"taskProperties"`
	TaskType          TaskTypeEnum       `json:"taskType"`
}
