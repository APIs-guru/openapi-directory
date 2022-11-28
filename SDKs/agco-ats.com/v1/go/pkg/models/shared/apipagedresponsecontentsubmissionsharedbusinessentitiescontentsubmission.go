package shared

// APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission
// A response containing a page of results and metadata concerning the results
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission struct {
	Entities []ContentSubmissionSharedBusinessEntitiesContentSubmission `json:"Entities"`
	Metadata APIPagedResponseMetadata                                   `json:"Metadata"`
}
