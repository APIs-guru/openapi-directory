package shared

type UnprocessedNamedQueryID struct {
	ErrorCode    *string `json:"ErrorCode"`
	ErrorMessage *string `json:"ErrorMessage"`
	NamedQueryID *string `json:"NamedQueryId"`
}
