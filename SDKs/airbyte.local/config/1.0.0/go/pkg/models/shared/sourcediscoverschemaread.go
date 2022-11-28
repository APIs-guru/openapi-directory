package shared

// SourceDiscoverSchemaRead
// Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.
type SourceDiscoverSchemaRead struct {
	Catalog *AirbyteCatalog    `json:"catalog,omitempty"`
	JobInfo SynchronousJobRead `json:"jobInfo"`
}
