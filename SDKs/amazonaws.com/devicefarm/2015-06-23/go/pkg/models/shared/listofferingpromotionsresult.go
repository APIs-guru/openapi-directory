package shared

type ListOfferingPromotionsResult struct {
	NextToken          *string             `json:"nextToken"`
	OfferingPromotions []OfferingPromotion `json:"offeringPromotions"`
}
