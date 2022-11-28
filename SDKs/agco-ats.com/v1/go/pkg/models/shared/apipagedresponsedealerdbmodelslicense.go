package shared

// APIPagedResponseDealerDbModelsLicense
// A response containing a page of results and metadata concerning the results
type APIPagedResponseDealerDbModelsLicense struct {
	Entities []DealerDbModelsLicense  `json:"Entities"`
	Metadata APIPagedResponseMetadata `json:"Metadata"`
}
