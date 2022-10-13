package shared

type Cell struct {
	Format         *FormatEnum `json:"format"`
	FormattedValue *string     `json:"formattedValue"`
	Formula        *string     `json:"formula"`
	RawValue       *string     `json:"rawValue"`
}
