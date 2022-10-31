package shared

type PiiEntity struct {
	BeginOffset *int64             `json:"BeginOffset,omitempty"`
	EndOffset   *int64             `json:"EndOffset,omitempty"`
	Score       *float32           `json:"Score,omitempty"`
	Type        *PiiEntityTypeEnum `json:"Type,omitempty"`
}
