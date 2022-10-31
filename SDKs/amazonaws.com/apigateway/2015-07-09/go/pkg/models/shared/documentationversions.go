package shared

type DocumentationVersions struct {
	Items    []DocumentationVersion `json:"items,omitempty"`
	Position *string                `json:"position,omitempty"`
}
