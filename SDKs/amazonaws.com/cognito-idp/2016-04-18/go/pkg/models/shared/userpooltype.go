package shared

import (
	"time"
)

// UserPoolType
// A container for information about the user pool.
type UserPoolType struct {
	AccountRecoverySetting      *AccountRecoverySettingType      `json:"AccountRecoverySetting,omitempty"`
	AdminCreateUserConfig       *AdminCreateUserConfigType       `json:"AdminCreateUserConfig,omitempty"`
	AliasAttributes             []AliasAttributeTypeEnum         `json:"AliasAttributes,omitempty"`
	Arn                         *string                          `json:"Arn,omitempty"`
	AutoVerifiedAttributes      []VerifiedAttributeTypeEnum      `json:"AutoVerifiedAttributes,omitempty"`
	CreationDate                *time.Time                       `json:"CreationDate,omitempty"`
	CustomDomain                *string                          `json:"CustomDomain,omitempty"`
	DeviceConfiguration         *DeviceConfigurationType         `json:"DeviceConfiguration,omitempty"`
	Domain                      *string                          `json:"Domain,omitempty"`
	EmailConfiguration          *EmailConfigurationType          `json:"EmailConfiguration,omitempty"`
	EmailConfigurationFailure   *string                          `json:"EmailConfigurationFailure,omitempty"`
	EmailVerificationMessage    *string                          `json:"EmailVerificationMessage,omitempty"`
	EmailVerificationSubject    *string                          `json:"EmailVerificationSubject,omitempty"`
	EstimatedNumberOfUsers      *int64                           `json:"EstimatedNumberOfUsers,omitempty"`
	ID                          *string                          `json:"Id,omitempty"`
	LambdaConfig                *LambdaConfigType                `json:"LambdaConfig,omitempty"`
	LastModifiedDate            *time.Time                       `json:"LastModifiedDate,omitempty"`
	MfaConfiguration            *UserPoolMfaTypeEnum             `json:"MfaConfiguration,omitempty"`
	Name                        *string                          `json:"Name,omitempty"`
	Policies                    *UserPoolPolicyType              `json:"Policies,omitempty"`
	SchemaAttributes            []SchemaAttributeType            `json:"SchemaAttributes,omitempty"`
	SmsAuthenticationMessage    *string                          `json:"SmsAuthenticationMessage,omitempty"`
	SmsConfiguration            *SmsConfigurationType            `json:"SmsConfiguration,omitempty"`
	SmsConfigurationFailure     *string                          `json:"SmsConfigurationFailure,omitempty"`
	SmsVerificationMessage      *string                          `json:"SmsVerificationMessage,omitempty"`
	Status                      *StatusTypeEnum                  `json:"Status,omitempty"`
	UserPoolAddOns              *UserPoolAddOnsType              `json:"UserPoolAddOns,omitempty"`
	UserPoolTags                map[string]string                `json:"UserPoolTags,omitempty"`
	UsernameAttributes          []UsernameAttributeTypeEnum      `json:"UsernameAttributes,omitempty"`
	UsernameConfiguration       *UsernameConfigurationType       `json:"UsernameConfiguration,omitempty"`
	VerificationMessageTemplate *VerificationMessageTemplateType `json:"VerificationMessageTemplate,omitempty"`
}
