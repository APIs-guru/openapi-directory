package shared

type Position struct {
	Column int64 `json:"column"`
	Line   int64 `json:"line"`
	Offset int64 `json:"offset"`
}
