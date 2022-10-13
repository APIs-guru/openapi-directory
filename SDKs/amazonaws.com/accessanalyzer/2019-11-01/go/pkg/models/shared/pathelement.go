package shared

type PathElement struct {
	Index     *int64     `json:"index"`
	Key       *string    `json:"key"`
	Substring *Substring `json:"substring"`
	Value     *string    `json:"value"`
}
