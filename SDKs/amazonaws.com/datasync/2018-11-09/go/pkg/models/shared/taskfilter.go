package shared

type TaskFilter struct {
	Name     TaskFilterNameEnum `json:"Name"`
	Operator OperatorEnum       `json:"Operator"`
	Values   []string           `json:"Values"`
}
