package shared

type Icd10CmEntity struct {
	Attributes      []Icd10CmAttribute         `json:"Attributes"`
	BeginOffset     *int64                     `json:"BeginOffset"`
	Category        *Icd10CmEntityCategoryEnum `json:"Category"`
	EndOffset       *int64                     `json:"EndOffset"`
	Icd10CmConcepts []Icd10CmConcept           `json:"ICD10CMConcepts"`
	ID              *int64                     `json:"Id"`
	Score           *float32                   `json:"Score"`
	Text            *string                    `json:"Text"`
	Traits          []Icd10CmTrait             `json:"Traits"`
	Type            *Icd10CmEntityTypeEnum     `json:"Type"`
}
