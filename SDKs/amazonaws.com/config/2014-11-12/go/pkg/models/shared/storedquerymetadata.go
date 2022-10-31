package shared

type StoredQueryMetadata struct {
	Description *string `json:"Description,omitempty"`
	QueryArn    string  `json:"QueryArn"`
	QueryID     string  `json:"QueryId"`
	QueryName   string  `json:"QueryName"`
}
