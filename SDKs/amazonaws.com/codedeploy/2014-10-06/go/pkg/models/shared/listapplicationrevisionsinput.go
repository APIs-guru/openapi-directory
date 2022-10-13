package shared

type ListApplicationRevisionsInput struct {
	ApplicationName string                         `json:"applicationName"`
	Deployed        *ListStateFilterActionEnum     `json:"deployed"`
	NextToken       *string                        `json:"nextToken"`
	S3Bucket        *string                        `json:"s3Bucket"`
	S3KeyPrefix     *string                        `json:"s3KeyPrefix"`
	SortBy          *ApplicationRevisionSortByEnum `json:"sortBy"`
	SortOrder       *SortOrderEnum                 `json:"sortOrder"`
}
