package shared

type ActionTypeID struct {
	Category ActionCategoryEnum `json:"category"`
	Owner    ActionOwnerEnum    `json:"owner"`
	Provider string             `json:"provider"`
	Version  string             `json:"version"`
}
