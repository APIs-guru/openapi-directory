package shared

// APIPagedResponseDealerDbModelsVoucher
// A response containing a page of results and metadata concerning the results
type APIPagedResponseDealerDbModelsVoucher struct {
	Entities []DealerDbModelsVoucher  `json:"Entities"`
	Metadata APIPagedResponseMetadata `json:"Metadata"`
}
