package shared

// KeySchemaElement
// <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table.
type KeySchemaElement struct {
	AttributeName string                  `json:"AttributeName"`
	AttributeType ScalarAttributeTypeEnum `json:"AttributeType"`
}
