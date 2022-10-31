package shared



type PurchaseOfferingRequest struct {
    OfferingID string `json:"offeringId"`
    OfferingPromotionID *string `json:"offeringPromotionId,omitempty"`
    Quantity int64 `json:"quantity"`
    
}

