package shared

type GetOfferingStatusResult struct {
	Current    map[string]OfferingStatus `json:"current"`
	NextPeriod map[string]OfferingStatus `json:"nextPeriod"`
	NextToken  *string                   `json:"nextToken"`
}
