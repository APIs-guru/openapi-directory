package shared

// APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
// A response containing a page of results and metadata concerning the results
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute struct {
	Entities []ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute `json:"Entities"`
	Metadata APIPagedResponseMetadata                                            `json:"Metadata"`
}
