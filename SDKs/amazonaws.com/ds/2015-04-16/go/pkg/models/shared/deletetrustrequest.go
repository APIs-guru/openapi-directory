package shared

// DeleteTrustRequest
// Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.
type DeleteTrustRequest struct {
	DeleteAssociatedConditionalForwarder *bool  `json:"DeleteAssociatedConditionalForwarder,omitempty"`
	TrustID                              string `json:"TrustId"`
}
