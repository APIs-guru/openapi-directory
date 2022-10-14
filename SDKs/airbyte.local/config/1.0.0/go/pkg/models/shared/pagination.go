package shared

type Pagination struct {
	PageSize  *int64 `json:"pageSize,omitempty"`
	RowOffset *int64 `json:"rowOffset,omitempty"`
}
