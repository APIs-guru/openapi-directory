package shared

type DescribeEnvironmentMembershipsResult struct {
	Memberships []EnvironmentMember `json:"memberships"`
	NextToken   *string             `json:"nextToken"`
}
