package shared

type Icd10CmAttribute struct {
	BeginOffset       *int64                       `json:"BeginOffset"`
	Category          *Icd10CmEntityTypeEnum       `json:"Category"`
	EndOffset         *int64                       `json:"EndOffset"`
	ID                *int64                       `json:"Id"`
	RelationshipScore *float32                     `json:"RelationshipScore"`
	RelationshipType  *Icd10CmRelationshipTypeEnum `json:"RelationshipType"`
	Score             *float32                     `json:"Score"`
	Text              *string                      `json:"Text"`
	Traits            []Icd10CmTrait               `json:"Traits"`
	Type              *Icd10CmAttributeTypeEnum    `json:"Type"`
}
