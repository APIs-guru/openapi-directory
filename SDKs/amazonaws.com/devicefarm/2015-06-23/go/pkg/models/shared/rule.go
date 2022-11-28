package shared

// Rule
// Represents a condition for a device pool.
type Rule struct {
	Attribute *DeviceAttributeEnum `json:"attribute,omitempty"`
	Operator  *RuleOperatorEnum    `json:"operator,omitempty"`
	Value     *string              `json:"value,omitempty"`
}
