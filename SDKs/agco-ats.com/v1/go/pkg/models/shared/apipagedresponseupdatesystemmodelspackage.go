package shared

// APIPagedResponseUpdateSystemModelsPackage
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsPackage struct {
	Entities []UpdateSystemModelsPackage `json:"Entities"`
	Metadata APIPagedResponseMetadata    `json:"Metadata"`
}
