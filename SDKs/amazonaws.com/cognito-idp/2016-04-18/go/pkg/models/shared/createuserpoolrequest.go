package shared

type CreateUserPoolRequest struct {
	AccountRecoverySetting      *AccountRecoverySettingType      `json:"AccountRecoverySetting"`
	AdminCreateUserConfig       *AdminCreateUserConfigType       `json:"AdminCreateUserConfig"`
	AliasAttributes             []AliasAttributeTypeEnum         `json:"AliasAttributes"`
	AutoVerifiedAttributes      []VerifiedAttributeTypeEnum      `json:"AutoVerifiedAttributes"`
	DeviceConfiguration         *DeviceConfigurationType         `json:"DeviceConfiguration"`
	EmailConfiguration          *EmailConfigurationType          `json:"EmailConfiguration"`
	EmailVerificationMessage    *string                          `json:"EmailVerificationMessage"`
	EmailVerificationSubject    *string                          `json:"EmailVerificationSubject"`
	LambdaConfig                *LambdaConfigType                `json:"LambdaConfig"`
	MfaConfiguration            *UserPoolMfaTypeEnum             `json:"MfaConfiguration"`
	Policies                    *UserPoolPolicyType              `json:"Policies"`
	PoolName                    string                           `json:"PoolName"`
	Schema                      []SchemaAttributeType            `json:"Schema"`
	SmsAuthenticationMessage    *string                          `json:"SmsAuthenticationMessage"`
	SmsConfiguration            *SmsConfigurationType            `json:"SmsConfiguration"`
	SmsVerificationMessage      *string                          `json:"SmsVerificationMessage"`
	UserPoolAddOns              *UserPoolAddOnsType              `json:"UserPoolAddOns"`
	UserPoolTags                map[string]string                `json:"UserPoolTags"`
	UsernameAttributes          []UsernameAttributeTypeEnum      `json:"UsernameAttributes"`
	UsernameConfiguration       *UsernameConfigurationType       `json:"UsernameConfiguration"`
	VerificationMessageTemplate *VerificationMessageTemplateType `json:"VerificationMessageTemplate"`
}
