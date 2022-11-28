package shared

// APIPagedResponseAPIModelsLog
// A response containing a page of results and metadata concerning the results
type APIPagedResponseAPIModelsLog struct {
	Entities []APIModelsLog           `json:"Entities"`
	Metadata APIPagedResponseMetadata `json:"Metadata"`
}
