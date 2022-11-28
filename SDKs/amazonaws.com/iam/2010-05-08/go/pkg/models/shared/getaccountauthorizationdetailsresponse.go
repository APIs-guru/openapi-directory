package shared

// GetAccountAuthorizationDetailsResponse
// Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request.
type GetAccountAuthorizationDetailsResponse struct {
	GroupDetailList []GroupDetail
	IsTruncated     *bool
	Marker          *string
	Policies        []ManagedPolicyDetail
	RoleDetailList  []RoleDetail
	UserDetailList  []UserDetail
}
