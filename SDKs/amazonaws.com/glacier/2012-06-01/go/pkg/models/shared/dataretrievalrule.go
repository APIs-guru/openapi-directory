package shared

type DataRetrievalRule struct {
	BytesPerHour *int64  `json:"BytesPerHour"`
	Strategy     *string `json:"Strategy"`
}
