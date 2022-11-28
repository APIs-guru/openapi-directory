package shared

// UpdateTimeToLiveInput
// Represents the input of an <code>UpdateTimeToLive</code> operation.
type UpdateTimeToLiveInput struct {
	TableName               string                  `json:"TableName"`
	TimeToLiveSpecification TimeToLiveSpecification `json:"TimeToLiveSpecification"`
}
