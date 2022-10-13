package shared

type ListPermissionsResponse struct {
	NextToken   *string      `json:"NextToken"`
	Permissions []Permission `json:"Permissions"`
}
