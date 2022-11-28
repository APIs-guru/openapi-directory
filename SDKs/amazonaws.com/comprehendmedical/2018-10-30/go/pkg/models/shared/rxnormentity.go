package shared

// RxNormEntity
// The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
type RxNormEntity struct {
	Attributes     []RxNormAttribute         `json:"Attributes,omitempty"`
	BeginOffset    *int64                    `json:"BeginOffset,omitempty"`
	Category       *RxNormEntityCategoryEnum `json:"Category,omitempty"`
	EndOffset      *int64                    `json:"EndOffset,omitempty"`
	ID             *int64                    `json:"Id,omitempty"`
	RxNormConcepts []RxNormConcept           `json:"RxNormConcepts,omitempty"`
	Score          *float32                  `json:"Score,omitempty"`
	Text           *string                   `json:"Text,omitempty"`
	Traits         []RxNormTrait             `json:"Traits,omitempty"`
	Type           *RxNormEntityTypeEnum     `json:"Type,omitempty"`
}
