package shared

type Metrics struct {
	FindingsCount           *int64 `json:"FindingsCount"`
	MeteredLinesOfCodeCount *int64 `json:"MeteredLinesOfCodeCount"`
}
