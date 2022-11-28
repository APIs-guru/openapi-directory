package shared

// APIPagedResponseAPIModelsUser
// A response containing a page of results and metadata concerning the results
type APIPagedResponseAPIModelsUser struct {
	Entities []APIModelsUser          `json:"Entities"`
	Metadata APIPagedResponseMetadata `json:"Metadata"`
}
