package shared

type DescribeEnvironmentMembershipsResult struct {
	Memberships []EnvironmentMember `json:"memberships,omitempty"`
	NextToken   *string             `json:"nextToken,omitempty"`
}
