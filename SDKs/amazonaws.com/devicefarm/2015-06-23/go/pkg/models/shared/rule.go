package shared

type Rule struct {
	Attribute *DeviceAttributeEnum `json:"attribute"`
	Operator  *RuleOperatorEnum    `json:"operator"`
	Value     *string              `json:"value"`
}
