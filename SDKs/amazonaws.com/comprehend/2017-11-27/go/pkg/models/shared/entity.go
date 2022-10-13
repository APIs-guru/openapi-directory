package shared

type Entity struct {
	BeginOffset *int64          `json:"BeginOffset"`
	EndOffset   *int64          `json:"EndOffset"`
	Score       *float32        `json:"Score"`
	Text        *string         `json:"Text"`
	Type        *EntityTypeEnum `json:"Type"`
}
