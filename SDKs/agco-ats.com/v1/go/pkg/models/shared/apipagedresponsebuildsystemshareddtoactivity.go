package shared

// APIPagedResponseBuildSystemSharedDtoActivity
// A response containing a page of results and metadata concerning the results
type APIPagedResponseBuildSystemSharedDtoActivity struct {
	Entities []BuildSystemSharedDtoActivity `json:"Entities"`
	Metadata APIPagedResponseMetadata       `json:"Metadata"`
}
