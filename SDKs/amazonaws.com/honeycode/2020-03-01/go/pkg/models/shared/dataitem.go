package shared

// DataItem
// The data in a particular data cell defined on the screen.
type DataItem struct {
	FormattedValue *string     `json:"formattedValue,omitempty"`
	OverrideFormat *FormatEnum `json:"overrideFormat,omitempty"`
	RawValue       *string     `json:"rawValue,omitempty"`
}
