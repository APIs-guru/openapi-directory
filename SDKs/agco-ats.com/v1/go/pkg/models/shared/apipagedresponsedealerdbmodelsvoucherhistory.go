package shared

// APIPagedResponseDealerDbModelsVoucherHistory
// A response containing a page of results and metadata concerning the results
type APIPagedResponseDealerDbModelsVoucherHistory struct {
	Entities []DealerDbModelsVoucherHistory `json:"Entities"`
	Metadata APIPagedResponseMetadata       `json:"Metadata"`
}
