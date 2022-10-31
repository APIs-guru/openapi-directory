package shared



type WeightedTarget struct {
    VirtualNode *string `json:"virtualNode,omitempty"`
    Weight *int64 `json:"weight,omitempty"`
    
}

