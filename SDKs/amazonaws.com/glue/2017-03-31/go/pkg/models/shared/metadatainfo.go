package shared

type MetadataInfo struct {
	CreatedTime            *string                      `json:"CreatedTime"`
	MetadataValue          *string                      `json:"MetadataValue"`
	OtherMetadataValueList []OtherMetadataValueListItem `json:"OtherMetadataValueList"`
}
