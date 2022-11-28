package shared

// UpdateUserPoolRequest
// Represents the request to update the user pool.
type UpdateUserPoolRequest struct {
	AccountRecoverySetting      *AccountRecoverySettingType      `json:"AccountRecoverySetting,omitempty"`
	AdminCreateUserConfig       *AdminCreateUserConfigType       `json:"AdminCreateUserConfig,omitempty"`
	AutoVerifiedAttributes      []VerifiedAttributeTypeEnum      `json:"AutoVerifiedAttributes,omitempty"`
	DeviceConfiguration         *DeviceConfigurationType         `json:"DeviceConfiguration,omitempty"`
	EmailConfiguration          *EmailConfigurationType          `json:"EmailConfiguration,omitempty"`
	EmailVerificationMessage    *string                          `json:"EmailVerificationMessage,omitempty"`
	EmailVerificationSubject    *string                          `json:"EmailVerificationSubject,omitempty"`
	LambdaConfig                *LambdaConfigType                `json:"LambdaConfig,omitempty"`
	MfaConfiguration            *UserPoolMfaTypeEnum             `json:"MfaConfiguration,omitempty"`
	Policies                    *UserPoolPolicyType              `json:"Policies,omitempty"`
	SmsAuthenticationMessage    *string                          `json:"SmsAuthenticationMessage,omitempty"`
	SmsConfiguration            *SmsConfigurationType            `json:"SmsConfiguration,omitempty"`
	SmsVerificationMessage      *string                          `json:"SmsVerificationMessage,omitempty"`
	UserPoolAddOns              *UserPoolAddOnsType              `json:"UserPoolAddOns,omitempty"`
	UserPoolID                  string                           `json:"UserPoolId"`
	UserPoolTags                map[string]string                `json:"UserPoolTags,omitempty"`
	VerificationMessageTemplate *VerificationMessageTemplateType `json:"VerificationMessageTemplate,omitempty"`
}
