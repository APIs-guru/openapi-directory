package shared

// UpdateRecordsResponse
// Returned for a successful UpdateRecordsRequest.
type UpdateRecordsResponse struct {
	Records []Record `json:"Records,omitempty"`
}
