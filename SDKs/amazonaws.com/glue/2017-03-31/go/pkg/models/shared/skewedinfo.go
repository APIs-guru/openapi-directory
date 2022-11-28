package shared

// SkewedInfo
// Specifies skewed values in a table. Skewed values are those that occur with very high frequency.
type SkewedInfo struct {
	SkewedColumnNames             []string          `json:"SkewedColumnNames,omitempty"`
	SkewedColumnValueLocationMaps map[string]string `json:"SkewedColumnValueLocationMaps,omitempty"`
	SkewedColumnValues            []string          `json:"SkewedColumnValues,omitempty"`
}
