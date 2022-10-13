package shared

type GetAdminAccountResponse struct {
	AdminAccount *string                `json:"AdminAccount"`
	RoleStatus   *AccountRoleStatusEnum `json:"RoleStatus"`
}
