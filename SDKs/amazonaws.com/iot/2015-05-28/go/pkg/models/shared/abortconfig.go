package shared

// AbortConfig
// The criteria that determine when and how a job abort takes place.
type AbortConfig struct {
	CriteriaList []AbortCriteria `json:"criteriaList"`
}
