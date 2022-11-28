package shared

// Attribute
//
//	An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text.
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
