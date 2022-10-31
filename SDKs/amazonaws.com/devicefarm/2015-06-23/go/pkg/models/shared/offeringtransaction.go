package shared

import (
"time")

type OfferingTransaction struct {
    Cost *MonetaryAmount `json:"cost,omitempty"`
    CreatedOn *time.Time `json:"createdOn,omitempty"`
    OfferingPromotionID *string `json:"offeringPromotionId,omitempty"`
    OfferingStatus *OfferingStatus `json:"offeringStatus,omitempty"`
    TransactionID *string `json:"transactionId,omitempty"`
    
}

