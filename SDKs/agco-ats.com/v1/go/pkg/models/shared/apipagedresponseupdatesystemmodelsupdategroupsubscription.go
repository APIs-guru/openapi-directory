package shared

// APIPagedResponseUpdateSystemModelsUpdateGroupSubscription
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsUpdateGroupSubscription struct {
	Entities []UpdateSystemModelsUpdateGroupSubscription `json:"Entities"`
	Metadata APIPagedResponseMetadata                    `json:"Metadata"`
}
