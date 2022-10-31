package shared

type Attribute struct {
	BeginOffset       *int64                `json:"BeginOffset,omitempty"`
	Category          *EntityTypeEnum       `json:"Category,omitempty"`
	EndOffset         *int64                `json:"EndOffset,omitempty"`
	ID                *int64                `json:"Id,omitempty"`
	RelationshipScore *float32              `json:"RelationshipScore,omitempty"`
	RelationshipType  *RelationshipTypeEnum `json:"RelationshipType,omitempty"`
	Score             *float32              `json:"Score,omitempty"`
	Text              *string               `json:"Text,omitempty"`
	Traits            []Trait               `json:"Traits,omitempty"`
	Type              *EntitySubTypeEnum    `json:"Type,omitempty"`
}
