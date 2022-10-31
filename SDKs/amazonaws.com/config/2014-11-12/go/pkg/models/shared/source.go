package shared

type Source struct {
	Owner            OwnerEnum      `json:"Owner"`
	SourceDetails    []SourceDetail `json:"SourceDetails,omitempty"`
	SourceIdentifier string         `json:"SourceIdentifier"`
}
