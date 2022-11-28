package shared

// GlueConfiguration
// Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service.
type GlueConfiguration struct {
	DatabaseName string `json:"databaseName"`
	TableName    string `json:"tableName"`
}
