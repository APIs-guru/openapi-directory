package shared

type Endpoint struct {
	Address *string `json:"Address,omitempty"`
	Port    *int64  `json:"Port,omitempty"`
	URL     *string `json:"URL,omitempty"`
}
