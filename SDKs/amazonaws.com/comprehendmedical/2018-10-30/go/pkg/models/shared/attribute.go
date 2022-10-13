package shared

type Attribute struct {
	BeginOffset       *int64                `json:"BeginOffset"`
	Category          *EntityTypeEnum       `json:"Category"`
	EndOffset         *int64                `json:"EndOffset"`
	ID                *int64                `json:"Id"`
	RelationshipScore *float32              `json:"RelationshipScore"`
	RelationshipType  *RelationshipTypeEnum `json:"RelationshipType"`
	Score             *float32              `json:"Score"`
	Text              *string               `json:"Text"`
	Traits            []Trait               `json:"Traits"`
	Type              *EntitySubTypeEnum    `json:"Type"`
}
