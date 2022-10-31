package shared



type Attribute struct {
    Name string `json:"name"`
    TargetID *string `json:"targetId,omitempty"`
    TargetType *TargetTypeEnum `json:"targetType,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

