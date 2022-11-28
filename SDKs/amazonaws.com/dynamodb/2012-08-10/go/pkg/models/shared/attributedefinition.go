package shared

// AttributeDefinition
// Represents an attribute for describing the key schema for the table and indexes.
type AttributeDefinition struct {
	AttributeName string                  `json:"AttributeName"`
	AttributeType ScalarAttributeTypeEnum `json:"AttributeType"`
}
