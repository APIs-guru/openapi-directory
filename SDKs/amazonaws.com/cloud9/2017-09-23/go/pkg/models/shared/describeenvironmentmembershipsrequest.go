package shared

type DescribeEnvironmentMembershipsRequest struct {
	EnvironmentID *string           `json:"environmentId"`
	MaxResults    *int64            `json:"maxResults"`
	NextToken     *string           `json:"nextToken"`
	Permissions   []PermissionsEnum `json:"permissions"`
	UserArn       *string           `json:"userArn"`
}
