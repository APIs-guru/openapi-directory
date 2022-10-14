package shared

type GetOrganizationAdminAccountResponse struct {
	AdminAccountID *string `json:"adminAccountId,omitempty"`
	OrganizationID *string `json:"organizationId,omitempty"`
}
