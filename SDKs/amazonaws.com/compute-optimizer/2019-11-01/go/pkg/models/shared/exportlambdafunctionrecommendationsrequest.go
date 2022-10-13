package shared

type ExportLambdaFunctionRecommendationsRequest struct {
	AccountIds            []string                             `json:"accountIds"`
	FieldsToExport        []ExportableLambdaFunctionFieldEnum  `json:"fieldsToExport"`
	FileFormat            *FileFormatEnum                      `json:"fileFormat"`
	Filters               []LambdaFunctionRecommendationFilter `json:"filters"`
	IncludeMemberAccounts *bool                                `json:"includeMemberAccounts"`
	S3DestinationConfig   S3DestinationConfig                  `json:"s3DestinationConfig"`
}
