package shared

type CsvOutput struct {
	FieldDelimiter       *string          `json:"FieldDelimiter,omitempty"`
	QuoteCharacter       *string          `json:"QuoteCharacter,omitempty"`
	QuoteEscapeCharacter *string          `json:"QuoteEscapeCharacter,omitempty"`
	QuoteFields          *QuoteFieldsEnum `json:"QuoteFields,omitempty"`
	RecordDelimiter      *string          `json:"RecordDelimiter,omitempty"`
}
