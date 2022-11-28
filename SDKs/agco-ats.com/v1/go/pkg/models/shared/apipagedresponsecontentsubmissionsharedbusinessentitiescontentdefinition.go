package shared

// APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition
// A response containing a page of results and metadata concerning the results
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition struct {
	Entities []ContentSubmissionSharedBusinessEntitiesContentDefinition `json:"Entities"`
	Metadata APIPagedResponseMetadata                                   `json:"Metadata"`
}
