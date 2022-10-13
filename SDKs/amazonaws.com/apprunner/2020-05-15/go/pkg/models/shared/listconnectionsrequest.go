package shared

type ListConnectionsRequest struct {
	ConnectionName *string `json:"ConnectionName"`
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
}
