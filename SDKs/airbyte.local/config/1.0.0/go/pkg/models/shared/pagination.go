package shared

type Pagination struct {
	PageSize  *int64 `json:"pageSize"`
	RowOffset *int64 `json:"rowOffset"`
}
