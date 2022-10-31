package shared

import (
"time")


type ItemCategoryEnum string

const (
    ItemCategoryEnumLogin ItemCategoryEnum = "LOGIN"
ItemCategoryEnumPassword ItemCategoryEnum = "PASSWORD"
ItemCategoryEnumAPICredential ItemCategoryEnum = "API_CREDENTIAL"
ItemCategoryEnumServer ItemCategoryEnum = "SERVER"
ItemCategoryEnumDatabase ItemCategoryEnum = "DATABASE"
ItemCategoryEnumCreditCard ItemCategoryEnum = "CREDIT_CARD"
ItemCategoryEnumMembership ItemCategoryEnum = "MEMBERSHIP"
ItemCategoryEnumPassport ItemCategoryEnum = "PASSPORT"
ItemCategoryEnumSoftwareLicense ItemCategoryEnum = "SOFTWARE_LICENSE"
ItemCategoryEnumOutdoorLicense ItemCategoryEnum = "OUTDOOR_LICENSE"
ItemCategoryEnumSecureNote ItemCategoryEnum = "SECURE_NOTE"
ItemCategoryEnumWirelessRouter ItemCategoryEnum = "WIRELESS_ROUTER"
ItemCategoryEnumBankAccount ItemCategoryEnum = "BANK_ACCOUNT"
ItemCategoryEnumDriverLicense ItemCategoryEnum = "DRIVER_LICENSE"
ItemCategoryEnumIdentity ItemCategoryEnum = "IDENTITY"
ItemCategoryEnumRewardProgram ItemCategoryEnum = "REWARD_PROGRAM"
ItemCategoryEnumDocument ItemCategoryEnum = "DOCUMENT"
ItemCategoryEnumEmailAccount ItemCategoryEnum = "EMAIL_ACCOUNT"
ItemCategoryEnumSocialSecurityNumber ItemCategoryEnum = "SOCIAL_SECURITY_NUMBER"
ItemCategoryEnumCustom ItemCategoryEnum = "CUSTOM"
)



type ItemStateEnum string

const (
    ItemStateEnumArchived ItemStateEnum = "ARCHIVED"
ItemStateEnumDeleted ItemStateEnum = "DELETED"
)


type ItemUrls struct {
    Href string `json:"href"`
    Primary *bool `json:"primary,omitempty"`
    
}

type ItemVault struct {
    ID string `json:"id"`
    
}

type Item struct {
    Category ItemCategoryEnum `json:"category"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Favorite *bool `json:"favorite,omitempty"`
    ID *string `json:"id,omitempty"`
    LastEditedBy *string `json:"lastEditedBy,omitempty"`
    State *ItemStateEnum `json:"state,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Title *string `json:"title,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    Urls []ItemUrls `json:"urls,omitempty"`
    Vault ItemVault `json:"vault"`
    Version *int64 `json:"version,omitempty"`
    
}

