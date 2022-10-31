package shared



type ObjectAttributeRange struct {
    AttributeKey *AttributeKey `json:"AttributeKey,omitempty"`
    Range *TypedAttributeValueRange `json:"Range,omitempty"`
    
}

