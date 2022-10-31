package shared

type BatchGetNamedQueryOutput struct {
	NamedQueries             []NamedQuery              `json:"NamedQueries,omitempty"`
	UnprocessedNamedQueryIds []UnprocessedNamedQueryID `json:"UnprocessedNamedQueryIds,omitempty"`
}
