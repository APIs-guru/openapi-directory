package shared

type Offering struct {
	Description      *string             `json:"description"`
	ID               *string             `json:"id"`
	Platform         *DevicePlatformEnum `json:"platform"`
	RecurringCharges []RecurringCharge   `json:"recurringCharges"`
	Type             *OfferingTypeEnum   `json:"type"`
}
