package shared

type BatchDetachObject struct {
	BatchReferenceName *string         `json:"BatchReferenceName"`
	LinkName           string          `json:"LinkName"`
	ParentReference    ObjectReference `json:"ParentReference"`
}
