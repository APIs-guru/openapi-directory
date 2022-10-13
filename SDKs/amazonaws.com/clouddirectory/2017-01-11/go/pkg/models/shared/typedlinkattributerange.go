package shared

type TypedLinkAttributeRange struct {
	AttributeName *string                  `json:"AttributeName"`
	Range         TypedAttributeValueRange `json:"Range"`
}
