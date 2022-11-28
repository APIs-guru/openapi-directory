package shared

// DocumentationPartLocation
// Specifies the target API entity to which the documentation applies.
type DocumentationPartLocation struct {
	Method     *string                   `json:"method,omitempty"`
	Name       *string                   `json:"name,omitempty"`
	Path       *string                   `json:"path,omitempty"`
	StatusCode *string                   `json:"statusCode,omitempty"`
	Type       DocumentationPartTypeEnum `json:"type"`
}
