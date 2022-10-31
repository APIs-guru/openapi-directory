package shared



type Deserializer struct {
    HiveJSONSerDe *HiveJSONSerDe `json:"HiveJsonSerDe,omitempty"`
    OpenXJSONSerDe *OpenXJSONSerDe `json:"OpenXJsonSerDe,omitempty"`
    
}

