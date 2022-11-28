package shared

// APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition
// A response containing a page of results and metadata concerning the results
type APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition struct {
	Entities []ContentSubmissionSharedBusinessEntitiesUserContentDefinition `json:"Entities"`
	Metadata APIPagedResponseMetadata                                       `json:"Metadata"`
}
