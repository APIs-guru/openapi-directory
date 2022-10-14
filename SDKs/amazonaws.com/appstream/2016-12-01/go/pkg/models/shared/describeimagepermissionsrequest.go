package shared

type DescribeImagePermissionsRequest struct {
	MaxResults          *int64   `json:"MaxResults,omitempty"`
	Name                string   `json:"Name"`
	NextToken           *string  `json:"NextToken,omitempty"`
	SharedAwsAccountIds []string `json:"SharedAwsAccountIds,omitempty"`
}
