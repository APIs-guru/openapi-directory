package shared

// ObjectTypes
// Information about the type of an object in a merge operation.
type ObjectTypes struct {
	Base        *ObjectTypeEnumEnum `json:"base,omitempty"`
	Destination *ObjectTypeEnumEnum `json:"destination,omitempty"`
	Source      *ObjectTypeEnumEnum `json:"source,omitempty"`
}
