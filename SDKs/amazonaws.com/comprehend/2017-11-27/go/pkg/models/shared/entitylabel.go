package shared

// EntityLabel
// Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.
type EntityLabel struct {
	Name  *PiiEntityTypeEnum `json:"Name,omitempty"`
	Score *float32           `json:"Score,omitempty"`
}
