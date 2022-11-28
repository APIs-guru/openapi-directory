package shared

// PurchaseOfferingResult
// The result of the purchase offering (for example, success or failure).
type PurchaseOfferingResult struct {
	OfferingTransaction *OfferingTransaction `json:"offeringTransaction,omitempty"`
}
