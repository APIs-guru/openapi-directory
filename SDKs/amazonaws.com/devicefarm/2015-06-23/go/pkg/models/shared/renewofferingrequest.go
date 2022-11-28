package shared

// RenewOfferingRequest
// A request that represents an offering renewal.
type RenewOfferingRequest struct {
	OfferingID string `json:"offeringId"`
	Quantity   int64  `json:"quantity"`
}
