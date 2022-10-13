package shared

type LocationFilter struct {
	Name     LocationFilterNameEnum `json:"Name"`
	Operator OperatorEnum           `json:"Operator"`
	Values   []string               `json:"Values"`
}
