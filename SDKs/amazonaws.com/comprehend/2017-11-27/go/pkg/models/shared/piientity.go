package shared

type PiiEntity struct {
	BeginOffset *int64             `json:"BeginOffset"`
	EndOffset   *int64             `json:"EndOffset"`
	Score       *float32           `json:"Score"`
	Type        *PiiEntityTypeEnum `json:"Type"`
}
