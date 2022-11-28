package shared

// ActionTypeArtifactDetails
// Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.
type ActionTypeArtifactDetails struct {
	MaximumCount int64 `json:"maximumCount"`
	MinimumCount int64 `json:"minimumCount"`
}
