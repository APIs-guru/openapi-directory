package shared

// APIPagedResponseUpdateSystemModelsPackageStatusSummary
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsPackageStatusSummary struct {
	Entities []UpdateSystemModelsPackageStatusSummary `json:"Entities"`
	Metadata APIPagedResponseMetadata                 `json:"Metadata"`
}
