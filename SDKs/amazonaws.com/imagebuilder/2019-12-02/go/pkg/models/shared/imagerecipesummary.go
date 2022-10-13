package shared

type ImageRecipeSummary struct {
	Arn         *string           `json:"arn"`
	DateCreated *string           `json:"dateCreated"`
	Name        *string           `json:"name"`
	Owner       *string           `json:"owner"`
	ParentImage *string           `json:"parentImage"`
	Platform    *PlatformEnum     `json:"platform"`
	Tags        map[string]string `json:"tags"`
}
