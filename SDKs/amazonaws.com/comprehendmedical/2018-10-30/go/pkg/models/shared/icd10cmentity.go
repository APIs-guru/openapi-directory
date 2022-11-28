package shared

// Icd10CmEntity
// The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
type Icd10CmEntity struct {
	Attributes      []Icd10CmAttribute         `json:"Attributes,omitempty"`
	BeginOffset     *int64                     `json:"BeginOffset,omitempty"`
	Category        *Icd10CmEntityCategoryEnum `json:"Category,omitempty"`
	EndOffset       *int64                     `json:"EndOffset,omitempty"`
	Icd10CmConcepts []Icd10CmConcept           `json:"ICD10CMConcepts,omitempty"`
	ID              *int64                     `json:"Id,omitempty"`
	Score           *float32                   `json:"Score,omitempty"`
	Text            *string                    `json:"Text,omitempty"`
	Traits          []Icd10CmTrait             `json:"Traits,omitempty"`
	Type            *Icd10CmEntityTypeEnum     `json:"Type,omitempty"`
}
