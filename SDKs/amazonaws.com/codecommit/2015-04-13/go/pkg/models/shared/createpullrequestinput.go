package shared

type CreatePullRequestInput struct {
	ClientRequestToken *string  `json:"clientRequestToken"`
	Description        *string  `json:"description"`
	Targets            []Target `json:"targets"`
	Title              string   `json:"title"`
}
