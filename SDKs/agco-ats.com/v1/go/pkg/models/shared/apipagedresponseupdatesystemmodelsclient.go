package shared

// APIPagedResponseUpdateSystemModelsClient
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsClient struct {
	Entities []UpdateSystemModelsClient `json:"Entities"`
	Metadata APIPagedResponseMetadata   `json:"Metadata"`
}
