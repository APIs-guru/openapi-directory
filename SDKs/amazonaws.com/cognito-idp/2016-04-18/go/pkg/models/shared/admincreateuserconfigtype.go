package shared

type AdminCreateUserConfigType struct {
	AllowAdminCreateUserOnly  *bool                `json:"AllowAdminCreateUserOnly"`
	InviteMessageTemplate     *MessageTemplateType `json:"InviteMessageTemplate"`
	UnusedAccountValidityDays *int64               `json:"UnusedAccountValidityDays"`
}
