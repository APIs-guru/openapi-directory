package shared



type Taint struct {
    Effect *TaintEffectEnum `json:"effect,omitempty"`
    Key *string `json:"key,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

