package shared

type ExportEc2InstanceRecommendationsRequest struct {
	AccountIds                []string                      `json:"accountIds"`
	FieldsToExport            []ExportableInstanceFieldEnum `json:"fieldsToExport"`
	FileFormat                *FileFormatEnum               `json:"fileFormat"`
	Filters                   []Filter                      `json:"filters"`
	IncludeMemberAccounts     *bool                         `json:"includeMemberAccounts"`
	RecommendationPreferences *RecommendationPreferences    `json:"recommendationPreferences"`
	S3DestinationConfig       S3DestinationConfig           `json:"s3DestinationConfig"`
}
