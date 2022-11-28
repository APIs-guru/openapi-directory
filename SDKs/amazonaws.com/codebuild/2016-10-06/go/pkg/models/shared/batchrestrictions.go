package shared

// BatchRestrictions
// Specifies restrictions for the batch build.
type BatchRestrictions struct {
	ComputeTypesAllowed  []string `json:"computeTypesAllowed,omitempty"`
	MaximumBuildsAllowed *int64   `json:"maximumBuildsAllowed,omitempty"`
}
