package shared

type Icd10CmAttribute struct {
	BeginOffset       *int64                       `json:"BeginOffset,omitempty"`
	Category          *Icd10CmEntityTypeEnum       `json:"Category,omitempty"`
	EndOffset         *int64                       `json:"EndOffset,omitempty"`
	ID                *int64                       `json:"Id,omitempty"`
	RelationshipScore *float32                     `json:"RelationshipScore,omitempty"`
	RelationshipType  *Icd10CmRelationshipTypeEnum `json:"RelationshipType,omitempty"`
	Score             *float32                     `json:"Score,omitempty"`
	Text              *string                      `json:"Text,omitempty"`
	Traits            []Icd10CmTrait               `json:"Traits,omitempty"`
	Type              *Icd10CmAttributeTypeEnum    `json:"Type,omitempty"`
}
