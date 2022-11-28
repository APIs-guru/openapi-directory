package shared

// ActionTypeID
// Represents information about an action type.
type ActionTypeID struct {
	Category ActionCategoryEnum `json:"category"`
	Owner    ActionOwnerEnum    `json:"owner"`
	Provider string             `json:"provider"`
	Version  string             `json:"version"`
}
