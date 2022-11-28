package shared

type FieldPurposeEnum string

const (
	FieldPurposeEnumUnknown  FieldPurposeEnum = ""
	FieldPurposeEnumUsername FieldPurposeEnum = "USERNAME"
	FieldPurposeEnumPassword FieldPurposeEnum = "PASSWORD"
	FieldPurposeEnumNotes    FieldPurposeEnum = "NOTES"
)

type FieldSection struct {
	ID *string `json:"id,omitempty"`
}

type FieldTypeEnum string

const (
	FieldTypeEnumString    FieldTypeEnum = "STRING"
	FieldTypeEnumEmail     FieldTypeEnum = "EMAIL"
	FieldTypeEnumConcealed FieldTypeEnum = "CONCEALED"
	FieldTypeEnumURL       FieldTypeEnum = "URL"
	FieldTypeEnumTotp      FieldTypeEnum = "TOTP"
	FieldTypeEnumDate      FieldTypeEnum = "DATE"
	FieldTypeEnumMonthYear FieldTypeEnum = "MONTH_YEAR"
	FieldTypeEnumMenu      FieldTypeEnum = "MENU"
)

type FieldInput struct {
	Generate *bool             `json:"generate,omitempty"`
	ID       string            `json:"id"`
	Label    *string           `json:"label,omitempty"`
	Purpose  *FieldPurposeEnum `json:"purpose,omitempty"`
	Recipe   *GeneratorRecipe  `json:"recipe,omitempty"`
	Section  *FieldSection     `json:"section,omitempty"`
	Type     FieldTypeEnum     `json:"type"`
	Value    *string           `json:"value,omitempty"`
}

type Field struct {
	Entropy  *float64          `json:"entropy,omitempty"`
	Generate *bool             `json:"generate,omitempty"`
	ID       string            `json:"id"`
	Label    *string           `json:"label,omitempty"`
	Purpose  *FieldPurposeEnum `json:"purpose,omitempty"`
	Recipe   *GeneratorRecipe  `json:"recipe,omitempty"`
	Section  *FieldSection     `json:"section,omitempty"`
	Type     FieldTypeEnum     `json:"type"`
	Value    *string           `json:"value,omitempty"`
}
