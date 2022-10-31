package shared



type DescribeImagePermissionsResult struct {
    Name *string `json:"Name,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SharedImagePermissionsList []SharedImagePermissions `json:"SharedImagePermissionsList,omitempty"`
    
}

