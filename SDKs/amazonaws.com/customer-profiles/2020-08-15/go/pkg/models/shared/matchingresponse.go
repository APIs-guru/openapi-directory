package shared

// MatchingResponse
// The flag that enables the matching process of duplicate profiles.
type MatchingResponse struct {
	Enabled *bool `json:"Enabled,omitempty"`
}
