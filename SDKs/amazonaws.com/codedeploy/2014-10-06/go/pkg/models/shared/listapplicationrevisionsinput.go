package shared

// ListApplicationRevisionsInput
//
//	Represents the input of a <code>ListApplicationRevisions</code> operation.
type ListApplicationRevisionsInput struct {
	ApplicationName string                         `json:"applicationName"`
	Deployed        *ListStateFilterActionEnum     `json:"deployed,omitempty"`
	NextToken       *string                        `json:"nextToken,omitempty"`
	S3Bucket        *string                        `json:"s3Bucket,omitempty"`
	S3KeyPrefix     *string                        `json:"s3KeyPrefix,omitempty"`
	SortBy          *ApplicationRevisionSortByEnum `json:"sortBy,omitempty"`
	SortOrder       *SortOrderEnum                 `json:"sortOrder,omitempty"`
}
