package shared

// Sample
// Represents a sample of performance data.
type Sample struct {
	Arn  *string         `json:"arn,omitempty"`
	Type *SampleTypeEnum `json:"type,omitempty"`
	URL  *string         `json:"url,omitempty"`
}
