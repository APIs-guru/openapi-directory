package shared

type TimestreamAction struct {
	DatabaseName string                `json:"databaseName"`
	Dimensions   []TimestreamDimension `json:"dimensions"`
	RoleArn      string                `json:"roleArn"`
	TableName    string                `json:"tableName"`
	Timestamp    *TimestreamTimestamp  `json:"timestamp"`
}
