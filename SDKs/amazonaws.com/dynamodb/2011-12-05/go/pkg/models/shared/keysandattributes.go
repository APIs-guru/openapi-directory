package shared



type KeysAndAttributes struct {
    AttributesToGet []string `json:"AttributesToGet,omitempty"`
    ConsistentRead *bool `json:"ConsistentRead,omitempty"`
    Keys []Key `json:"Keys"`
    
}

