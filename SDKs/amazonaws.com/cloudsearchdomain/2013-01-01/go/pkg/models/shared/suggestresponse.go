package shared

// SuggestResponse
// Contains the response to a <code>Suggest</code> request.
type SuggestResponse struct {
	Status  *SuggestStatus `json:"status,omitempty"`
	Suggest *SuggestModel  `json:"suggest,omitempty"`
}
