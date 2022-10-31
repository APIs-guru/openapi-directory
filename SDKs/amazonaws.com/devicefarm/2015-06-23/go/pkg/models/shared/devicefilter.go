package shared



type DeviceFilter struct {
    Attribute DeviceFilterAttributeEnum `json:"attribute"`
    Operator RuleOperatorEnum `json:"operator"`
    Values []string `json:"values"`
    
}

