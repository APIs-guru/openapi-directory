package shared

// CsvInput
// Contains information about the comma-separated value (CSV) file to select from.
type CsvInput struct {
	Comments             *string             `json:"Comments,omitempty"`
	FieldDelimiter       *string             `json:"FieldDelimiter,omitempty"`
	FileHeaderInfo       *FileHeaderInfoEnum `json:"FileHeaderInfo,omitempty"`
	QuoteCharacter       *string             `json:"QuoteCharacter,omitempty"`
	QuoteEscapeCharacter *string             `json:"QuoteEscapeCharacter,omitempty"`
	RecordDelimiter      *string             `json:"RecordDelimiter,omitempty"`
}
