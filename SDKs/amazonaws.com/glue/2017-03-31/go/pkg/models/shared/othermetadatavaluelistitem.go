package shared

// OtherMetadataValueListItem
// A structure containing other metadata for a schema version belonging to the same metadata key.
type OtherMetadataValueListItem struct {
	CreatedTime   *string `json:"CreatedTime,omitempty"`
	MetadataValue *string `json:"MetadataValue,omitempty"`
}
