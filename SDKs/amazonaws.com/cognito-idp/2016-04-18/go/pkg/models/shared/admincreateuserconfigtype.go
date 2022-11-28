package shared

// AdminCreateUserConfigType
// The configuration for creating a new user profile.
type AdminCreateUserConfigType struct {
	AllowAdminCreateUserOnly  *bool                `json:"AllowAdminCreateUserOnly,omitempty"`
	InviteMessageTemplate     *MessageTemplateType `json:"InviteMessageTemplate,omitempty"`
	UnusedAccountValidityDays *int64               `json:"UnusedAccountValidityDays,omitempty"`
}
