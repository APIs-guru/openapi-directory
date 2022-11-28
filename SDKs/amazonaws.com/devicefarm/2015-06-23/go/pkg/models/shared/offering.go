package shared

// Offering
// Represents the metadata of a device offering.
type Offering struct {
	Description      *string             `json:"description,omitempty"`
	ID               *string             `json:"id,omitempty"`
	Platform         *DevicePlatformEnum `json:"platform,omitempty"`
	RecurringCharges []RecurringCharge   `json:"recurringCharges,omitempty"`
	Type             *OfferingTypeEnum   `json:"type,omitempty"`
}
