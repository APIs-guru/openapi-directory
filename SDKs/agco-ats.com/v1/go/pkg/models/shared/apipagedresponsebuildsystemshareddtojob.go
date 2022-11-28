package shared

// APIPagedResponseBuildSystemSharedDtoJob
// A response containing a page of results and metadata concerning the results
type APIPagedResponseBuildSystemSharedDtoJob struct {
	Entities []BuildSystemSharedDtoJob `json:"Entities"`
	Metadata APIPagedResponseMetadata  `json:"Metadata"`
}
