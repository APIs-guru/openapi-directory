package shared

// RelatedObservations
// Describes observations related to the problem.
type RelatedObservations struct {
	ObservationList []Observation `json:"ObservationList,omitempty"`
}
