package shared

type ReactionValueFormats struct {
	Emoji     *string `json:"emoji,omitempty"`
	ShortCode *string `json:"shortCode,omitempty"`
	Unicode   *string `json:"unicode,omitempty"`
}
