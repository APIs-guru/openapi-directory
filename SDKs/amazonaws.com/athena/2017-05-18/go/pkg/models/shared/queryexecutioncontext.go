package shared

type QueryExecutionContext struct {
	Catalog  *string `json:"Catalog"`
	Database *string `json:"Database"`
}
