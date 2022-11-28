package shared

// CrawlerTargets
// Specifies data stores to crawl.
type CrawlerTargets struct {
	CatalogTargets  []CatalogTarget  `json:"CatalogTargets,omitempty"`
	DynamoDbTargets []DynamoDbTarget `json:"DynamoDBTargets,omitempty"`
	JdbcTargets     []JdbcTarget     `json:"JdbcTargets,omitempty"`
	MongoDbTargets  []MongoDbTarget  `json:"MongoDBTargets,omitempty"`
	S3Targets       []S3Target       `json:"S3Targets,omitempty"`
}
