package shared

type DocumentationParts struct {
	Items    []DocumentationPart `json:"items"`
	Position *string             `json:"position"`
}
