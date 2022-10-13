package shared

type SchemaAttribute struct {
	AttributeName *string            `json:"AttributeName"`
	AttributeType *AttributeTypeEnum `json:"AttributeType"`
}
