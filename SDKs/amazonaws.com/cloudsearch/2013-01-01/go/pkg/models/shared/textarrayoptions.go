package shared

// TextArrayOptions
// Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.
type TextArrayOptions struct {
	AnalysisScheme   *string
	DefaultValue     *string
	HighlightEnabled *bool
	ReturnEnabled    *bool
	SourceFields     *string
}
