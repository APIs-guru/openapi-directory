package shared

import (
	"time"
)

type UserPoolType struct {
	AccountRecoverySetting      *AccountRecoverySettingType      `json:"AccountRecoverySetting"`
	AdminCreateUserConfig       *AdminCreateUserConfigType       `json:"AdminCreateUserConfig"`
	AliasAttributes             []AliasAttributeTypeEnum         `json:"AliasAttributes"`
	Arn                         *string                          `json:"Arn"`
	AutoVerifiedAttributes      []VerifiedAttributeTypeEnum      `json:"AutoVerifiedAttributes"`
	CreationDate                *time.Time                       `json:"CreationDate"`
	CustomDomain                *string                          `json:"CustomDomain"`
	DeviceConfiguration         *DeviceConfigurationType         `json:"DeviceConfiguration"`
	Domain                      *string                          `json:"Domain"`
	EmailConfiguration          *EmailConfigurationType          `json:"EmailConfiguration"`
	EmailConfigurationFailure   *string                          `json:"EmailConfigurationFailure"`
	EmailVerificationMessage    *string                          `json:"EmailVerificationMessage"`
	EmailVerificationSubject    *string                          `json:"EmailVerificationSubject"`
	EstimatedNumberOfUsers      *int64                           `json:"EstimatedNumberOfUsers"`
	ID                          *string                          `json:"Id"`
	LambdaConfig                *LambdaConfigType                `json:"LambdaConfig"`
	LastModifiedDate            *time.Time                       `json:"LastModifiedDate"`
	MfaConfiguration            *UserPoolMfaTypeEnum             `json:"MfaConfiguration"`
	Name                        *string                          `json:"Name"`
	Policies                    *UserPoolPolicyType              `json:"Policies"`
	SchemaAttributes            []SchemaAttributeType            `json:"SchemaAttributes"`
	SmsAuthenticationMessage    *string                          `json:"SmsAuthenticationMessage"`
	SmsConfiguration            *SmsConfigurationType            `json:"SmsConfiguration"`
	SmsConfigurationFailure     *string                          `json:"SmsConfigurationFailure"`
	SmsVerificationMessage      *string                          `json:"SmsVerificationMessage"`
	Status                      *StatusTypeEnum                  `json:"Status"`
	UserPoolAddOns              *UserPoolAddOnsType              `json:"UserPoolAddOns"`
	UserPoolTags                map[string]string                `json:"UserPoolTags"`
	UsernameAttributes          []UsernameAttributeTypeEnum      `json:"UsernameAttributes"`
	UsernameConfiguration       *UsernameConfigurationType       `json:"UsernameConfiguration"`
	VerificationMessageTemplate *VerificationMessageTemplateType `json:"VerificationMessageTemplate"`
}
