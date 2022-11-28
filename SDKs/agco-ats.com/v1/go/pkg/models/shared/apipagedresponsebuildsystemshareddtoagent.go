package shared

// APIPagedResponseBuildSystemSharedDtoAgent
// A response containing a page of results and metadata concerning the results
type APIPagedResponseBuildSystemSharedDtoAgent struct {
	Entities []BuildSystemSharedDtoAgent `json:"Entities"`
	Metadata APIPagedResponseMetadata    `json:"Metadata"`
}
