package shared

// APIPagedResponseUpdateSystemModelsPackageType
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsPackageType struct {
	Entities []UpdateSystemModelsPackageType `json:"Entities"`
	Metadata APIPagedResponseMetadata        `json:"Metadata"`
}
