package shared

type ListActiveViolationsResponse struct {
	ActiveViolations []ActiveViolation `json:"activeViolations"`
	NextToken        *string           `json:"nextToken"`
}
