package shared

// SourceDataTrimTitle
// Specifies how to trim common words from the beginning of a field to enable title sorting by that field.
type SourceDataTrimTitle struct {
	DefaultValue *string
	Language     *string
	Separator    *string
	SourceName   string
}
