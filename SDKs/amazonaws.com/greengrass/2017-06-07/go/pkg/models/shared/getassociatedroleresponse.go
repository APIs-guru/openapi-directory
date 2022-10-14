package shared

type GetAssociatedRoleResponse struct {
	AssociatedAt *string `json:"AssociatedAt,omitempty"`
	RoleArn      *string `json:"RoleArn,omitempty"`
}
