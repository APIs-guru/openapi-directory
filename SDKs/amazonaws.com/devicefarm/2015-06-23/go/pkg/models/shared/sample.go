package shared

type Sample struct {
	Arn  *string         `json:"arn"`
	Type *SampleTypeEnum `json:"type"`
	URL  *string         `json:"url"`
}
