package shared

type BatchRestrictions struct {
	ComputeTypesAllowed  []string `json:"computeTypesAllowed,omitempty"`
	MaximumBuildsAllowed *int64   `json:"maximumBuildsAllowed,omitempty"`
}
