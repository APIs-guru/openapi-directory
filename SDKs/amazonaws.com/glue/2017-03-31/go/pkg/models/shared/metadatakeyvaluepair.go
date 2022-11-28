package shared

// MetadataKeyValuePair
// A structure containing a key value pair for metadata.
type MetadataKeyValuePair struct {
	MetadataKey   *string `json:"MetadataKey,omitempty"`
	MetadataValue *string `json:"MetadataValue,omitempty"`
}
