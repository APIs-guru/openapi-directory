package shared



type ExportAutoScalingGroupRecommendationsRequest struct {
    AccountIds []string `json:"accountIds,omitempty"`
    FieldsToExport []ExportableAutoScalingGroupFieldEnum `json:"fieldsToExport,omitempty"`
    FileFormat *FileFormatEnum `json:"fileFormat,omitempty"`
    Filters []Filter `json:"filters,omitempty"`
    IncludeMemberAccounts *bool `json:"includeMemberAccounts,omitempty"`
    RecommendationPreferences *RecommendationPreferences `json:"recommendationPreferences,omitempty"`
    S3DestinationConfig S3DestinationConfig `json:"s3DestinationConfig"`
    
}

