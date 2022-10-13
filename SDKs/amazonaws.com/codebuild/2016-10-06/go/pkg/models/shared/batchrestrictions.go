package shared

type BatchRestrictions struct {
	ComputeTypesAllowed  []string `json:"computeTypesAllowed"`
	MaximumBuildsAllowed *int64   `json:"maximumBuildsAllowed"`
}
