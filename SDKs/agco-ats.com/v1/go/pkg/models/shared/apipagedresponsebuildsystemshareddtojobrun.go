package shared

// APIPagedResponseBuildSystemSharedDtoJobRun
// A response containing a page of results and metadata concerning the results
type APIPagedResponseBuildSystemSharedDtoJobRun struct {
	Entities []BuildSystemSharedDtoJobRun `json:"Entities"`
	Metadata APIPagedResponseMetadata     `json:"Metadata"`
}
