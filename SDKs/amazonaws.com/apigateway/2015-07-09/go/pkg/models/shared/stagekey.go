package shared

// StageKey
// A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.
type StageKey struct {
	RestAPIID *string `json:"restApiId,omitempty"`
	StageName *string `json:"stageName,omitempty"`
}
