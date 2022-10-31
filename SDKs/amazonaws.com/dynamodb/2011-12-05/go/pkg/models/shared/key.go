package shared



type Key struct {
    HashKeyElement AttributeValue `json:"HashKeyElement"`
    RangeKeyElement *AttributeValue `json:"RangeKeyElement,omitempty"`
    
}

