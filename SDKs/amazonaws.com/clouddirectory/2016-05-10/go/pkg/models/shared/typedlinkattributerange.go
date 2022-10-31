package shared



type TypedLinkAttributeRange struct {
    AttributeName *string `json:"AttributeName,omitempty"`
    Range TypedAttributeValueRange `json:"Range"`
    
}

