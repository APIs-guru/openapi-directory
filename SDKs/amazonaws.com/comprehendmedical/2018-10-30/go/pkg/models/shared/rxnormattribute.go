package shared



type RxNormAttribute struct {
    BeginOffset *int64 `json:"BeginOffset,omitempty"`
    EndOffset *int64 `json:"EndOffset,omitempty"`
    ID *int64 `json:"Id,omitempty"`
    RelationshipScore *float32 `json:"RelationshipScore,omitempty"`
    Score *float32 `json:"Score,omitempty"`
    Text *string `json:"Text,omitempty"`
    Traits []RxNormTrait `json:"Traits,omitempty"`
    Type *RxNormAttributeTypeEnum `json:"Type,omitempty"`
    
}

