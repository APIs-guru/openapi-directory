package shared

// APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata struct {
	Entities []UpdateSystemModelsClientStatus            `json:"Entities"`
	Metadata UpdateSystemModelsPagedClientStatusMetadata `json:"Metadata"`
}
