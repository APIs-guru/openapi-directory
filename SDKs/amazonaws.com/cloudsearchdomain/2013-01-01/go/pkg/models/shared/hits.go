package shared

type Hits struct {
	Cursor *string `json:"cursor,omitempty"`
	Found  *int64  `json:"found,omitempty"`
	Hit    []Hit   `json:"hit,omitempty"`
	Start  *int64  `json:"start,omitempty"`
}
