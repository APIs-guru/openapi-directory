package shared

// Schema
// Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.
type Schema struct {
	Attributes []SchemaAttribute `json:"Attributes,omitempty"`
}
