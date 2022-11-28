package shared

// GetOfferingStatusResult
// Returns the status result for a device offering.
type GetOfferingStatusResult struct {
	Current    map[string]OfferingStatus `json:"current,omitempty"`
	NextPeriod map[string]OfferingStatus `json:"nextPeriod,omitempty"`
	NextToken  *string                   `json:"nextToken,omitempty"`
}
