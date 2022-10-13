package shared

type RxNormAttribute struct {
	BeginOffset       *int64                   `json:"BeginOffset"`
	EndOffset         *int64                   `json:"EndOffset"`
	ID                *int64                   `json:"Id"`
	RelationshipScore *float32                 `json:"RelationshipScore"`
	Score             *float32                 `json:"Score"`
	Text              *string                  `json:"Text"`
	Traits            []RxNormTrait            `json:"Traits"`
	Type              *RxNormAttributeTypeEnum `json:"Type"`
}
