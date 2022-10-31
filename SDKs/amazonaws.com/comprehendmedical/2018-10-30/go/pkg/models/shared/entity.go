package shared



type Entity struct {
    Attributes []Attribute `json:"Attributes,omitempty"`
    BeginOffset *int64 `json:"BeginOffset,omitempty"`
    Category *EntityTypeEnum `json:"Category,omitempty"`
    EndOffset *int64 `json:"EndOffset,omitempty"`
    ID *int64 `json:"Id,omitempty"`
    Score *float32 `json:"Score,omitempty"`
    Text *string `json:"Text,omitempty"`
    Traits []Trait `json:"Traits,omitempty"`
    Type *EntitySubTypeEnum `json:"Type,omitempty"`
    
}

