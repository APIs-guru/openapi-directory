package shared

// APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription
// A response containing a page of results and metadata concerning the results
type APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription struct {
	Entities []UpdateSystemModelsAvailableUpdateGroupSubscription `json:"Entities"`
	Metadata APIPagedResponseMetadata                             `json:"Metadata"`
}
