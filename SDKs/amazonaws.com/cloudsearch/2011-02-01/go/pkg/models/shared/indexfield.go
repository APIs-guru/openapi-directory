package shared

// IndexField
// Defines a field in the index, including its name, type, and the source of its data. The <code>IndexFieldType</code> indicates which of the options will be present. It is invalid to specify options for a type other than the <code>IndexFieldType</code>.
type IndexField struct {
	IndexFieldName   string
	IndexFieldType   IndexFieldTypeEnum
	LiteralOptions   *LiteralOptions
	SourceAttributes []SourceAttribute
	TextOptions      *TextOptions
	UIntOptions      *UIntOptions
}
