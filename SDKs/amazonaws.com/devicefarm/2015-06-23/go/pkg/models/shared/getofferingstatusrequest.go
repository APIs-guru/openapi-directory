package shared

// GetOfferingStatusRequest
// Represents the request to retrieve the offering status for the specified customer or account.
type GetOfferingStatusRequest struct {
	NextToken *string `json:"nextToken,omitempty"`
}
