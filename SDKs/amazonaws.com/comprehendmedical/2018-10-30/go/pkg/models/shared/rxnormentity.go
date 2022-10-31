package shared



type RxNormEntity struct {
    Attributes []RxNormAttribute `json:"Attributes,omitempty"`
    BeginOffset *int64 `json:"BeginOffset,omitempty"`
    Category *RxNormEntityCategoryEnum `json:"Category,omitempty"`
    EndOffset *int64 `json:"EndOffset,omitempty"`
    ID *int64 `json:"Id,omitempty"`
    RxNormConcepts []RxNormConcept `json:"RxNormConcepts,omitempty"`
    Score *float32 `json:"Score,omitempty"`
    Text *string `json:"Text,omitempty"`
    Traits []RxNormTrait `json:"Traits,omitempty"`
    Type *RxNormEntityTypeEnum `json:"Type,omitempty"`
    
}

