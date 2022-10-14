package shared

type Rule struct {
	Attribute *DeviceAttributeEnum `json:"attribute,omitempty"`
	Operator  *RuleOperatorEnum    `json:"operator,omitempty"`
	Value     *string              `json:"value,omitempty"`
}
