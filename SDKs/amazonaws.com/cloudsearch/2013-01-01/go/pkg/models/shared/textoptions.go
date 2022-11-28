package shared

// TextOptions
// Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.
type TextOptions struct {
	AnalysisScheme   *string
	DefaultValue     *string
	HighlightEnabled *bool
	ReturnEnabled    *bool
	SortEnabled      *bool
	SourceField      *string
}
