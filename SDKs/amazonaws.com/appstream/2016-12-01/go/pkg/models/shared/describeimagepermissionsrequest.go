package shared

type DescribeImagePermissionsRequest struct {
	MaxResults          *int64   `json:"MaxResults"`
	Name                string   `json:"Name"`
	NextToken           *string  `json:"NextToken"`
	SharedAwsAccountIds []string `json:"SharedAwsAccountIds"`
}
