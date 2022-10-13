package shared

type FieldPurposeEnum string

const (
	FieldPurposeEnumUnknown  FieldPurposeEnum = ""
	FieldPurposeEnumUsername FieldPurposeEnum = "USERNAME"
	FieldPurposeEnumPassword FieldPurposeEnum = "PASSWORD"
	FieldPurposeEnumNotes    FieldPurposeEnum = "NOTES"
)

type FieldSection struct {
	ID *string `json:"id"`
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

type Field struct {
	Entropy  *float64          `json:"entropy"`
	Generate *bool             `json:"generate"`
	ID       string            `json:"id"`
	Label    *string           `json:"label"`
	Purpose  *FieldPurposeEnum `json:"purpose"`
	Recipe   *GeneratorRecipe  `json:"recipe"`
	Section  *FieldSection     `json:"section"`
	Type     FieldTypeEnum     `json:"type"`
	Value    *string           `json:"value"`
}
