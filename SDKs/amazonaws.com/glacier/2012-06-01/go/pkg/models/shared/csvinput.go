package shared

type CsvInput struct {
	Comments             *string             `json:"Comments,omitempty"`
	FieldDelimiter       *string             `json:"FieldDelimiter,omitempty"`
	FileHeaderInfo       *FileHeaderInfoEnum `json:"FileHeaderInfo,omitempty"`
	QuoteCharacter       *string             `json:"QuoteCharacter,omitempty"`
	QuoteEscapeCharacter *string             `json:"QuoteEscapeCharacter,omitempty"`
	RecordDelimiter      *string             `json:"RecordDelimiter,omitempty"`
}
