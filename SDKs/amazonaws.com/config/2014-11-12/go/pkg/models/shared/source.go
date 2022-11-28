package shared

// Source
// Provides the Config rule owner (Amazon Web Services or customer), the rule identifier, and the events that trigger the evaluation of your Amazon Web Services resources.
type Source struct {
	Owner            OwnerEnum      `json:"Owner"`
	SourceDetails    []SourceDetail `json:"SourceDetails,omitempty"`
	SourceIdentifier string         `json:"SourceIdentifier"`
}
