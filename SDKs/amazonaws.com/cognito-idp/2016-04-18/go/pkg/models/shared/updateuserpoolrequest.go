package shared

type UpdateUserPoolRequest struct {
	AccountRecoverySetting      *AccountRecoverySettingType      `json:"AccountRecoverySetting"`
	AdminCreateUserConfig       *AdminCreateUserConfigType       `json:"AdminCreateUserConfig"`
	AutoVerifiedAttributes      []VerifiedAttributeTypeEnum      `json:"AutoVerifiedAttributes"`
	DeviceConfiguration         *DeviceConfigurationType         `json:"DeviceConfiguration"`
	EmailConfiguration          *EmailConfigurationType          `json:"EmailConfiguration"`
	EmailVerificationMessage    *string                          `json:"EmailVerificationMessage"`
	EmailVerificationSubject    *string                          `json:"EmailVerificationSubject"`
	LambdaConfig                *LambdaConfigType                `json:"LambdaConfig"`
	MfaConfiguration            *UserPoolMfaTypeEnum             `json:"MfaConfiguration"`
	Policies                    *UserPoolPolicyType              `json:"Policies"`
	SmsAuthenticationMessage    *string                          `json:"SmsAuthenticationMessage"`
	SmsConfiguration            *SmsConfigurationType            `json:"SmsConfiguration"`
	SmsVerificationMessage      *string                          `json:"SmsVerificationMessage"`
	UserPoolAddOns              *UserPoolAddOnsType              `json:"UserPoolAddOns"`
	UserPoolID                  string                           `json:"UserPoolId"`
	UserPoolTags                map[string]string                `json:"UserPoolTags"`
	VerificationMessageTemplate *VerificationMessageTemplateType `json:"VerificationMessageTemplate"`
}
