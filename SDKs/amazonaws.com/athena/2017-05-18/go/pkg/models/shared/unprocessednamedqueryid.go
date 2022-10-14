package shared

type UnprocessedNamedQueryID struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	NamedQueryID *string `json:"NamedQueryId,omitempty"`
}
