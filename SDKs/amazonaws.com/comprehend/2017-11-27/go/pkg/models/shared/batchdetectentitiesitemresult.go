package shared



type BatchDetectEntitiesItemResult struct {
    Entities []Entity `json:"Entities,omitempty"`
    Index *int64 `json:"Index,omitempty"`
    
}

