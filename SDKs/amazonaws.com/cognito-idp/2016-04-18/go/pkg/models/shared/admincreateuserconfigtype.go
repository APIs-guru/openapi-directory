package shared



type AdminCreateUserConfigType struct {
    AllowAdminCreateUserOnly *bool `json:"AllowAdminCreateUserOnly,omitempty"`
    InviteMessageTemplate *MessageTemplateType `json:"InviteMessageTemplate,omitempty"`
    UnusedAccountValidityDays *int64 `json:"UnusedAccountValidityDays,omitempty"`
    
}

