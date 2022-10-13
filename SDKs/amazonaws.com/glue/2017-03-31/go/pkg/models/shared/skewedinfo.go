package shared

type SkewedInfo struct {
	SkewedColumnNames             []string          `json:"SkewedColumnNames"`
	SkewedColumnValueLocationMaps map[string]string `json:"SkewedColumnValueLocationMaps"`
	SkewedColumnValues            []string          `json:"SkewedColumnValues"`
}
