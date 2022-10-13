package shared

type GetExclusionsPreviewRequest struct {
	AssessmentTemplateArn string      `json:"assessmentTemplateArn"`
	Locale                *LocaleEnum `json:"locale"`
	MaxResults            *int64      `json:"maxResults"`
	NextToken             *string     `json:"nextToken"`
	PreviewToken          string      `json:"previewToken"`
}
