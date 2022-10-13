package shared

type Hits struct {
	Cursor *string `json:"cursor"`
	Found  *int64  `json:"found"`
	Hit    []Hit   `json:"hit"`
	Start  *int64  `json:"start"`
}
