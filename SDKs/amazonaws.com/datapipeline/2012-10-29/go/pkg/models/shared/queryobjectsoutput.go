package shared

type QueryObjectsOutput struct {
	HasMoreResults *bool    `json:"hasMoreResults,omitempty"`
	Ids            []string `json:"ids,omitempty"`
	Marker         *string  `json:"marker,omitempty"`
}
