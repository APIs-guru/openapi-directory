package shared

type DocumentationPartLocation struct {
	Method     *string                   `json:"method,omitempty"`
	Name       *string                   `json:"name,omitempty"`
	Path       *string                   `json:"path,omitempty"`
	StatusCode *string                   `json:"statusCode,omitempty"`
	Type       DocumentationPartTypeEnum `json:"type"`
}
