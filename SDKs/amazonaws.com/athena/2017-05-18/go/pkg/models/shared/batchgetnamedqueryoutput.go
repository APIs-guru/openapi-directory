package shared

type BatchGetNamedQueryOutput struct {
	NamedQueries             []NamedQuery              `json:"NamedQueries"`
	UnprocessedNamedQueryIds []UnprocessedNamedQueryID `json:"UnprocessedNamedQueryIds"`
}
