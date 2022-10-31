package shared



type PathElement struct {
    Index *int64 `json:"index,omitempty"`
    Key *string `json:"key,omitempty"`
    Substring *Substring `json:"substring,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

