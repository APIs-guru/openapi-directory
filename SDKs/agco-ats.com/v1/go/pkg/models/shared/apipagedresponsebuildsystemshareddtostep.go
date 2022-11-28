package shared

// APIPagedResponseBuildSystemSharedDtoStep
// A response containing a page of results and metadata concerning the results
type APIPagedResponseBuildSystemSharedDtoStep struct {
	Entities []BuildSystemSharedDtoStep `json:"Entities"`
	Metadata APIPagedResponseMetadata   `json:"Metadata"`
}
