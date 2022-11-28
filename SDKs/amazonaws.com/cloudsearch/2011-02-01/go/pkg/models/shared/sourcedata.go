package shared

// SourceData
// The source attribute name and an optional default value to use if a document doesn't have an attribute of that name.
type SourceData struct {
	DefaultValue *string
	SourceName   string
}
