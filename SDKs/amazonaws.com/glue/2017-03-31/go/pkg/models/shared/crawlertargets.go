package shared

type CrawlerTargets struct {
	CatalogTargets  []CatalogTarget  `json:"CatalogTargets"`
	DynamoDbTargets []DynamoDbTarget `json:"DynamoDBTargets"`
	JdbcTargets     []JdbcTarget     `json:"JdbcTargets"`
	MongoDbTargets  []MongoDbTarget  `json:"MongoDBTargets"`
	S3Targets       []S3Target       `json:"S3Targets"`
}
