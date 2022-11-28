package shared

// ListFleetsOutput
// Represents the returned data in response to a request operation.
type ListFleetsOutput struct {
	FleetIds  []string `json:"FleetIds,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
