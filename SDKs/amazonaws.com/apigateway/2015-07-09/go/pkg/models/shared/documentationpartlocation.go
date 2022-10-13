package shared

type DocumentationPartLocation struct {
	Method     *string                   `json:"method"`
	Name       *string                   `json:"name"`
	Path       *string                   `json:"path"`
	StatusCode *string                   `json:"statusCode"`
	Type       DocumentationPartTypeEnum `json:"type"`
}
