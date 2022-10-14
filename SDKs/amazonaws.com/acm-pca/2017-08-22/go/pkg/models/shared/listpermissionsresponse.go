package shared

type ListPermissionsResponse struct {
	NextToken   *string      `json:"NextToken,omitempty"`
	Permissions []Permission `json:"Permissions,omitempty"`
}
