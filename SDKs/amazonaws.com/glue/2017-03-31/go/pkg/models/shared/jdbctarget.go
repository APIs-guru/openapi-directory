package shared

type JdbcTarget struct {
	ConnectionName *string  `json:"ConnectionName"`
	Exclusions     []string `json:"Exclusions"`
	Path           *string  `json:"Path"`
}
