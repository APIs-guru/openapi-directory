package shared

// APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
// A response containing a page of results and metadata concerning the results
type APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute struct {
	Entities []ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `json:"Entities"`
	Metadata APIPagedResponseMetadata                                            `json:"Metadata"`
}
