package shared

type DocumentLabel struct {
	Name  *string  `json:"Name,omitempty"`
	Score *float32 `json:"Score,omitempty"`
}
