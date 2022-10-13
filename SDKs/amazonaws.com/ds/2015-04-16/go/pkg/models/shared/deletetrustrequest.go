package shared

type DeleteTrustRequest struct {
	DeleteAssociatedConditionalForwarder *bool  `json:"DeleteAssociatedConditionalForwarder"`
	TrustID                              string `json:"TrustId"`
}
