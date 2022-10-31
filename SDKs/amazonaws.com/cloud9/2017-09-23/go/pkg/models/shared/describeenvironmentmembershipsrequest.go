package shared

type DescribeEnvironmentMembershipsRequest struct {
	EnvironmentID *string           `json:"environmentId,omitempty"`
	MaxResults    *int64            `json:"maxResults,omitempty"`
	NextToken     *string           `json:"nextToken,omitempty"`
	Permissions   []PermissionsEnum `json:"permissions,omitempty"`
	UserArn       *string           `json:"userArn,omitempty"`
}
