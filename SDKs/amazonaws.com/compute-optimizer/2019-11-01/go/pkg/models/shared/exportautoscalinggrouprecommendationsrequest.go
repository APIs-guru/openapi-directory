package shared

type ExportAutoScalingGroupRecommendationsRequest struct {
	AccountIds                []string                              `json:"accountIds"`
	FieldsToExport            []ExportableAutoScalingGroupFieldEnum `json:"fieldsToExport"`
	FileFormat                *FileFormatEnum                       `json:"fileFormat"`
	Filters                   []Filter                              `json:"filters"`
	IncludeMemberAccounts     *bool                                 `json:"includeMemberAccounts"`
	RecommendationPreferences *RecommendationPreferences            `json:"recommendationPreferences"`
	S3DestinationConfig       S3DestinationConfig                   `json:"s3DestinationConfig"`
}
