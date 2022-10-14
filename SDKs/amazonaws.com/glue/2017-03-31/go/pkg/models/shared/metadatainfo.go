package shared

type MetadataInfo struct {
	CreatedTime            *string                      `json:"CreatedTime,omitempty"`
	MetadataValue          *string                      `json:"MetadataValue,omitempty"`
	OtherMetadataValueList []OtherMetadataValueListItem `json:"OtherMetadataValueList,omitempty"`
}
