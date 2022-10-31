package shared



type BatchDetachObject struct {
    BatchReferenceName *string `json:"BatchReferenceName,omitempty"`
    LinkName string `json:"LinkName"`
    ParentReference ObjectReference `json:"ParentReference"`
    
}

