package shared

// APIPagedResponseDealerDbModelsDealersPerCountry
// A response containing a page of results and metadata concerning the results
type APIPagedResponseDealerDbModelsDealersPerCountry struct {
	Entities []DealerDbModelsDealersPerCountry `json:"Entities"`
	Metadata APIPagedResponseMetadata          `json:"Metadata"`
}
