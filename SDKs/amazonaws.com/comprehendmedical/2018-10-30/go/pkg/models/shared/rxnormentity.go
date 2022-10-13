package shared

type RxNormEntity struct {
	Attributes     []RxNormAttribute         `json:"Attributes"`
	BeginOffset    *int64                    `json:"BeginOffset"`
	Category       *RxNormEntityCategoryEnum `json:"Category"`
	EndOffset      *int64                    `json:"EndOffset"`
	ID             *int64                    `json:"Id"`
	RxNormConcepts []RxNormConcept           `json:"RxNormConcepts"`
	Score          *float32                  `json:"Score"`
	Text           *string                   `json:"Text"`
	Traits         []RxNormTrait             `json:"Traits"`
	Type           *RxNormEntityTypeEnum     `json:"Type"`
}
