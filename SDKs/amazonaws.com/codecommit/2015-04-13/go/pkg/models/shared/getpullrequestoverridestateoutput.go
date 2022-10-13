package shared

type GetPullRequestOverrideStateOutput struct {
	Overridden *bool   `json:"overridden"`
	Overrider  *string `json:"overrider"`
}
