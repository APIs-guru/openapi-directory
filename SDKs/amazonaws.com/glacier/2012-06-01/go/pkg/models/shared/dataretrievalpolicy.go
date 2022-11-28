package shared

// DataRetrievalPolicy
// Data retrieval policy.
type DataRetrievalPolicy struct {
	Rules []DataRetrievalRule `json:"Rules,omitempty"`
}
