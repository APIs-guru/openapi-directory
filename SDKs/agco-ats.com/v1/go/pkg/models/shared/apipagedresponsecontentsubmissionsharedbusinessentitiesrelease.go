package shared

// APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease
// A response containing a page of results and metadata concerning the results
type APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease struct {
	Entities []ContentSubmissionSharedBusinessEntitiesRelease `json:"Entities"`
	Metadata APIPagedResponseMetadata                         `json:"Metadata"`
}
