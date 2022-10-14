package shared

type CreateUserPoolRequest struct {
	AccountRecoverySetting      *AccountRecoverySettingType      `json:"AccountRecoverySetting,omitempty"`
	AdminCreateUserConfig       *AdminCreateUserConfigType       `json:"AdminCreateUserConfig,omitempty"`
	AliasAttributes             []AliasAttributeTypeEnum         `json:"AliasAttributes,omitempty"`
	AutoVerifiedAttributes      []VerifiedAttributeTypeEnum      `json:"AutoVerifiedAttributes,omitempty"`
	DeviceConfiguration         *DeviceConfigurationType         `json:"DeviceConfiguration,omitempty"`
	EmailConfiguration          *EmailConfigurationType          `json:"EmailConfiguration,omitempty"`
	EmailVerificationMessage    *string                          `json:"EmailVerificationMessage,omitempty"`
	EmailVerificationSubject    *string                          `json:"EmailVerificationSubject,omitempty"`
	LambdaConfig                *LambdaConfigType                `json:"LambdaConfig,omitempty"`
	MfaConfiguration            *UserPoolMfaTypeEnum             `json:"MfaConfiguration,omitempty"`
	Policies                    *UserPoolPolicyType              `json:"Policies,omitempty"`
	PoolName                    string                           `json:"PoolName"`
	Schema                      []SchemaAttributeType            `json:"Schema,omitempty"`
	SmsAuthenticationMessage    *string                          `json:"SmsAuthenticationMessage,omitempty"`
	SmsConfiguration            *SmsConfigurationType            `json:"SmsConfiguration,omitempty"`
	SmsVerificationMessage      *string                          `json:"SmsVerificationMessage,omitempty"`
	UserPoolAddOns              *UserPoolAddOnsType              `json:"UserPoolAddOns,omitempty"`
	UserPoolTags                map[string]string                `json:"UserPoolTags,omitempty"`
	UsernameAttributes          []UsernameAttributeTypeEnum      `json:"UsernameAttributes,omitempty"`
	UsernameConfiguration       *UsernameConfigurationType       `json:"UsernameConfiguration,omitempty"`
	VerificationMessageTemplate *VerificationMessageTemplateType `json:"VerificationMessageTemplate,omitempty"`
}
