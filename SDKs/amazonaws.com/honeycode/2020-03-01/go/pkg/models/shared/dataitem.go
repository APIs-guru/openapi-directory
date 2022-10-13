package shared

type DataItem struct {
	FormattedValue *string     `json:"formattedValue"`
	OverrideFormat *FormatEnum `json:"overrideFormat"`
	RawValue       *string     `json:"rawValue"`
}
