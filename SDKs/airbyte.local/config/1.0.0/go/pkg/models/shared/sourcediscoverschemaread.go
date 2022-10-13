package shared

type SourceDiscoverSchemaRead struct {
	Catalog *AirbyteCatalog    `json:"catalog"`
	JobInfo SynchronousJobRead `json:"jobInfo"`
}
