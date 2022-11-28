package shared

type DescribeTagsResult struct {
	NextToken *string
	Tags      []TagDescription
}
