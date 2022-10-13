package shared

type Entity struct {
	Attributes  []Attribute        `json:"Attributes"`
	BeginOffset *int64             `json:"BeginOffset"`
	Category    *EntityTypeEnum    `json:"Category"`
	EndOffset   *int64             `json:"EndOffset"`
	ID          *int64             `json:"Id"`
	Score       *float32           `json:"Score"`
	Text        *string            `json:"Text"`
	Traits      []Trait            `json:"Traits"`
	Type        *EntitySubTypeEnum `json:"Type"`
}
