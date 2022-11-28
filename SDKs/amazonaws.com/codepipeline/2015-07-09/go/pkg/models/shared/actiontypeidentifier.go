package shared

// ActionTypeIdentifier
// Specifies the category, owner, provider, and version of the action type.
type ActionTypeIdentifier struct {
	Category ActionCategoryEnum `json:"category"`
	Owner    string             `json:"owner"`
	Provider string             `json:"provider"`
	Version  string             `json:"version"`
}
