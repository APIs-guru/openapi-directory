package shared

// APIPagedResponseUpdateSystemModelsUpdateGroup
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsUpdateGroup struct {
	Entities []UpdateSystemModelsUpdateGroup `json:"Entities"`
	Metadata APIPagedResponseMetadata        `json:"Metadata"`
}
