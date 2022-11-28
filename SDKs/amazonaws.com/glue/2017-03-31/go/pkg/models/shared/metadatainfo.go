package shared

// MetadataInfo
// A structure containing metadata information for a schema version.
type MetadataInfo struct {
	CreatedTime            *string                      `json:"CreatedTime,omitempty"`
	MetadataValue          *string                      `json:"MetadataValue,omitempty"`
	OtherMetadataValueList []OtherMetadataValueListItem `json:"OtherMetadataValueList,omitempty"`
}
