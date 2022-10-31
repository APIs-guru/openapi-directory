package shared

type ListOfferingPromotionsResult struct {
	NextToken          *string             `json:"nextToken,omitempty"`
	OfferingPromotions []OfferingPromotion `json:"offeringPromotions,omitempty"`
}
