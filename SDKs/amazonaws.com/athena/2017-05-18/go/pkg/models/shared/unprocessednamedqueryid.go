package shared

// UnprocessedNamedQueryID
// Information about a named query ID that could not be processed.
type UnprocessedNamedQueryID struct {
	ErrorCode    *string `json:"ErrorCode,omitempty"`
	ErrorMessage *string `json:"ErrorMessage,omitempty"`
	NamedQueryID *string `json:"NamedQueryId,omitempty"`
}
