package shared

type GetPullRequestOverrideStateOutput struct {
	Overridden *bool   `json:"overridden,omitempty"`
	Overrider  *string `json:"overrider,omitempty"`
}
