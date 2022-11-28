package shared

// CsvOutput
// Contains information about the comma-separated value (CSV) file that the job results are stored in.
type CsvOutput struct {
	FieldDelimiter       *string          `json:"FieldDelimiter,omitempty"`
	QuoteCharacter       *string          `json:"QuoteCharacter,omitempty"`
	QuoteEscapeCharacter *string          `json:"QuoteEscapeCharacter,omitempty"`
	QuoteFields          *QuoteFieldsEnum `json:"QuoteFields,omitempty"`
	RecordDelimiter      *string          `json:"RecordDelimiter,omitempty"`
}
