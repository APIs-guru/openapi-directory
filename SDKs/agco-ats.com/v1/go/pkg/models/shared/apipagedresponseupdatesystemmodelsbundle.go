package shared

// APIPagedResponseUpdateSystemModelsBundle
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsBundle struct {
	Entities []UpdateSystemModelsBundle `json:"Entities"`
	Metadata APIPagedResponseMetadata   `json:"Metadata"`
}
