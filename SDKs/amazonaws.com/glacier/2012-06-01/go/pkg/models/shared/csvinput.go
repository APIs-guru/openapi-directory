package shared

type CsvInput struct {
	Comments             *string             `json:"Comments"`
	FieldDelimiter       *string             `json:"FieldDelimiter"`
	FileHeaderInfo       *FileHeaderInfoEnum `json:"FileHeaderInfo"`
	QuoteCharacter       *string             `json:"QuoteCharacter"`
	QuoteEscapeCharacter *string             `json:"QuoteEscapeCharacter"`
	RecordDelimiter      *string             `json:"RecordDelimiter"`
}
