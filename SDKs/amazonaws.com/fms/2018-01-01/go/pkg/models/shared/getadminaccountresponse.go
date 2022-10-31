package shared



type GetAdminAccountResponse struct {
    AdminAccount *string `json:"AdminAccount,omitempty"`
    RoleStatus *AccountRoleStatusEnum `json:"RoleStatus,omitempty"`
    
}

