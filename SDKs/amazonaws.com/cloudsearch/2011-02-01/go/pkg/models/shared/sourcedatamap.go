package shared

// SourceDataMap
// Specifies how to map source attribute values to custom values when populating an <code>IndexField</code>.
type SourceDataMap struct {
	Cases        map[string]string
	DefaultValue *string
	SourceName   string
}
