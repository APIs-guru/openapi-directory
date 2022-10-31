package shared

type ExportEbsVolumeRecommendationsRequest struct {
	AccountIds            []string                    `json:"accountIds,omitempty"`
	FieldsToExport        []ExportableVolumeFieldEnum `json:"fieldsToExport,omitempty"`
	FileFormat            *FileFormatEnum             `json:"fileFormat,omitempty"`
	Filters               []EbsFilter                 `json:"filters,omitempty"`
	IncludeMemberAccounts *bool                       `json:"includeMemberAccounts,omitempty"`
	S3DestinationConfig   S3DestinationConfig         `json:"s3DestinationConfig"`
}
