package shared

// APIPagedResponseAPIModelsPermission
// A response containing a page of results and metadata concerning the results
type APIPagedResponseAPIModelsPermission struct {
	Entities []APIModelsPermission    `json:"Entities"`
	Metadata APIPagedResponseMetadata `json:"Metadata"`
}
