package shared



type UnmappedAttribute struct {
    Attribute *Attribute `json:"Attribute,omitempty"`
    Type *EntityTypeEnum `json:"Type,omitempty"`
    
}

