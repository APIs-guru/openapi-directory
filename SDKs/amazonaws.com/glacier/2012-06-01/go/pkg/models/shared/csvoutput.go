package shared

type CsvOutput struct {
	FieldDelimiter       *string          `json:"FieldDelimiter"`
	QuoteCharacter       *string          `json:"QuoteCharacter"`
	QuoteEscapeCharacter *string          `json:"QuoteEscapeCharacter"`
	QuoteFields          *QuoteFieldsEnum `json:"QuoteFields"`
	RecordDelimiter      *string          `json:"RecordDelimiter"`
}
