package shared

import (
	"time"
)

type OfferingTransaction struct {
	Cost                *MonetaryAmount `json:"cost"`
	CreatedOn           *time.Time      `json:"createdOn"`
	OfferingPromotionID *string         `json:"offeringPromotionId"`
	OfferingStatus      *OfferingStatus `json:"offeringStatus"`
	TransactionID       *string         `json:"transactionId"`
}
