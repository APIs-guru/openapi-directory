package shared

// SupportedFieldTypeDetails
//
//	Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>.
type SupportedFieldTypeDetails struct {
	V1 FieldTypeDetails `json:"v1"`
}
