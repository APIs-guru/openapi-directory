package shared

// Tag
//
//	A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"}
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
