package shared

// APIPagedResponseAPIModelsRole
// A response containing a page of results and metadata concerning the results
type APIPagedResponseAPIModelsRole struct {
	Entities []APIModelsRole          `json:"Entities"`
	Metadata APIPagedResponseMetadata `json:"Metadata"`
}
