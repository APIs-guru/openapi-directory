package shared

type QueryObjectsOutput struct {
	HasMoreResults *bool    `json:"hasMoreResults"`
	Ids            []string `json:"ids"`
	Marker         *string  `json:"marker"`
}
