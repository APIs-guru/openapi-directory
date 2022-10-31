package shared



type BatchUpdateObjectAttributes struct {
    AttributeUpdates []ObjectAttributeUpdate `json:"AttributeUpdates"`
    ObjectReference ObjectReference `json:"ObjectReference"`
    
}

