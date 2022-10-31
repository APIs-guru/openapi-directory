package shared

type Ulimit struct {
	HardLimit int64  `json:"hardLimit"`
	Name      string `json:"name"`
	SoftLimit int64  `json:"softLimit"`
}
