package shared

type ExportLambdaFunctionRecommendationsRequest struct {
	AccountIds            []string                             `json:"accountIds,omitempty"`
	FieldsToExport        []ExportableLambdaFunctionFieldEnum  `json:"fieldsToExport,omitempty"`
	FileFormat            *FileFormatEnum                      `json:"fileFormat,omitempty"`
	Filters               []LambdaFunctionRecommendationFilter `json:"filters,omitempty"`
	IncludeMemberAccounts *bool                                `json:"includeMemberAccounts,omitempty"`
	S3DestinationConfig   S3DestinationConfig                  `json:"s3DestinationConfig"`
}
