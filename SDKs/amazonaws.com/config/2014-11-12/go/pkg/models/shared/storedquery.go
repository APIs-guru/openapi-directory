package shared

type StoredQuery struct {
	Description *string `json:"Description"`
	Expression  *string `json:"Expression"`
	QueryArn    *string `json:"QueryArn"`
	QueryID     *string `json:"QueryId"`
	QueryName   string  `json:"QueryName"`
}
