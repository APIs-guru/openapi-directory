package shared

type StoredQueryMetadata struct {
	Description *string `json:"Description"`
	QueryArn    string  `json:"QueryArn"`
	QueryID     string  `json:"QueryId"`
	QueryName   string  `json:"QueryName"`
}
