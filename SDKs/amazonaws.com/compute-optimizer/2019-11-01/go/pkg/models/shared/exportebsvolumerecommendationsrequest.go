package shared

type ExportEbsVolumeRecommendationsRequest struct {
	AccountIds            []string                    `json:"accountIds"`
	FieldsToExport        []ExportableVolumeFieldEnum `json:"fieldsToExport"`
	FileFormat            *FileFormatEnum             `json:"fileFormat"`
	Filters               []EbsFilter                 `json:"filters"`
	IncludeMemberAccounts *bool                       `json:"includeMemberAccounts"`
	S3DestinationConfig   S3DestinationConfig         `json:"s3DestinationConfig"`
}
