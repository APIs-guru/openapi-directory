package shared

type Source struct {
	Owner            OwnerEnum      `json:"Owner"`
	SourceDetails    []SourceDetail `json:"SourceDetails"`
	SourceIdentifier string         `json:"SourceIdentifier"`
}
