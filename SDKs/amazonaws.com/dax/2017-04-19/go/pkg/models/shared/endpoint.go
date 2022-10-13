package shared

type Endpoint struct {
	Address *string `json:"Address"`
	Port    *int64  `json:"Port"`
	URL     *string `json:"URL"`
}
