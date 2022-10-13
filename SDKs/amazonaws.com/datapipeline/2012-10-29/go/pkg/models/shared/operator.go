package shared

type Operator struct {
	Type   *OperatorTypeEnum `json:"type"`
	Values []string          `json:"values"`
}
