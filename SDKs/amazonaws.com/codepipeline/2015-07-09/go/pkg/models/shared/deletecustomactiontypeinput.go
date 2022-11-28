package shared

// DeleteCustomActionTypeInput
// Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.
type DeleteCustomActionTypeInput struct {
	Category ActionCategoryEnum `json:"category"`
	Provider string             `json:"provider"`
	Version  string             `json:"version"`
}
