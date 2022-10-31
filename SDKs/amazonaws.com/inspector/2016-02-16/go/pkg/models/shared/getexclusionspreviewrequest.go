package shared



type GetExclusionsPreviewRequest struct {
    AssessmentTemplateArn string `json:"assessmentTemplateArn"`
    Locale *LocaleEnum `json:"locale,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PreviewToken string `json:"previewToken"`
    
}

