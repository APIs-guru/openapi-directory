package shared

// ReactionValueFormats
// Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.
type ReactionValueFormats struct {
	Emoji     *string `json:"emoji,omitempty"`
	ShortCode *string `json:"shortCode,omitempty"`
	Unicode   *string `json:"unicode,omitempty"`
}
