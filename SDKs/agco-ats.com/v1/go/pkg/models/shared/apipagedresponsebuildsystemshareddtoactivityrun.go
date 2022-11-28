package shared

// APIPagedResponseBuildSystemSharedDtoActivityRun
// A response containing a page of results and metadata concerning the results
type APIPagedResponseBuildSystemSharedDtoActivityRun struct {
	Entities []BuildSystemSharedDtoActivityRun `json:"Entities"`
	Metadata APIPagedResponseMetadata          `json:"Metadata"`
}
