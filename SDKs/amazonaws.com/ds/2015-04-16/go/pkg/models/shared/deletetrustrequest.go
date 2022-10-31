package shared



type DeleteTrustRequest struct {
    DeleteAssociatedConditionalForwarder *bool `json:"DeleteAssociatedConditionalForwarder,omitempty"`
    TrustID string `json:"TrustId"`
    
}

