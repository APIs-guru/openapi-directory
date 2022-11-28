package shared

type DescribeUserGroupsResult struct {
	Marker     *string
	UserGroups []UserGroup
}
