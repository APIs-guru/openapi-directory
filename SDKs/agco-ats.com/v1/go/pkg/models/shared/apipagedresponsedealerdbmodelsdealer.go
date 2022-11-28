package shared

// APIPagedResponseDealerDbModelsDealer
// A response containing a page of results and metadata concerning the results
type APIPagedResponseDealerDbModelsDealer struct {
	Entities []DealerDbModelsDealer   `json:"Entities"`
	Metadata APIPagedResponseMetadata `json:"Metadata"`
}
