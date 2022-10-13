package shared

type DescribeImagePermissionsResult struct {
	Name                       *string                  `json:"Name"`
	NextToken                  *string                  `json:"NextToken"`
	SharedImagePermissionsList []SharedImagePermissions `json:"SharedImagePermissionsList"`
}
