package shared

type SourceDiscoverSchemaRead struct {
	Catalog *AirbyteCatalog    `json:"catalog,omitempty"`
	JobInfo SynchronousJobRead `json:"jobInfo"`
}
