package shared

// APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion
// A response containing a page of results and metadata concerning the results
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion struct {
	Entities []ContentSubmissionSharedBusinessEntitiesContentReleaseVersion `json:"Entities"`
	Metadata APIPagedResponseMetadata                                       `json:"Metadata"`
}
