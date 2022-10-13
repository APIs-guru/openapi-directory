package shared

import (
	"time"
)

type FullItemCategoryEnum string

const (
	FullItemCategoryEnumLogin                FullItemCategoryEnum = "LOGIN"
	FullItemCategoryEnumPassword             FullItemCategoryEnum = "PASSWORD"
	FullItemCategoryEnumAPICredential        FullItemCategoryEnum = "API_CREDENTIAL"
	FullItemCategoryEnumServer               FullItemCategoryEnum = "SERVER"
	FullItemCategoryEnumDatabase             FullItemCategoryEnum = "DATABASE"
	FullItemCategoryEnumCreditCard           FullItemCategoryEnum = "CREDIT_CARD"
	FullItemCategoryEnumMembership           FullItemCategoryEnum = "MEMBERSHIP"
	FullItemCategoryEnumPassport             FullItemCategoryEnum = "PASSPORT"
	FullItemCategoryEnumSoftwareLicense      FullItemCategoryEnum = "SOFTWARE_LICENSE"
	FullItemCategoryEnumOutdoorLicense       FullItemCategoryEnum = "OUTDOOR_LICENSE"
	FullItemCategoryEnumSecureNote           FullItemCategoryEnum = "SECURE_NOTE"
	FullItemCategoryEnumWirelessRouter       FullItemCategoryEnum = "WIRELESS_ROUTER"
	FullItemCategoryEnumBankAccount          FullItemCategoryEnum = "BANK_ACCOUNT"
	FullItemCategoryEnumDriverLicense        FullItemCategoryEnum = "DRIVER_LICENSE"
	FullItemCategoryEnumIdentity             FullItemCategoryEnum = "IDENTITY"
	FullItemCategoryEnumRewardProgram        FullItemCategoryEnum = "REWARD_PROGRAM"
	FullItemCategoryEnumDocument             FullItemCategoryEnum = "DOCUMENT"
	FullItemCategoryEnumEmailAccount         FullItemCategoryEnum = "EMAIL_ACCOUNT"
	FullItemCategoryEnumSocialSecurityNumber FullItemCategoryEnum = "SOCIAL_SECURITY_NUMBER"
	FullItemCategoryEnumCustom               FullItemCategoryEnum = "CUSTOM"
)

type FullItemSections struct {
	ID    *string `json:"id"`
	Label *string `json:"label"`
}

type FullItemStateEnum string

const (
	FullItemStateEnumArchived FullItemStateEnum = "ARCHIVED"
	FullItemStateEnumDeleted  FullItemStateEnum = "DELETED"
)

type FullItemUrls struct {
	Href    string `json:"href"`
	Primary *bool  `json:"primary"`
}

type FullItemVault struct {
	ID string `json:"id"`
}

type FullItem struct {
	Category     FullItemCategoryEnum `json:"category"`
	CreatedAt    *time.Time           `json:"createdAt"`
	Favorite     *bool                `json:"favorite"`
	Fields       []Field              `json:"fields"`
	Files        []File               `json:"files"`
	ID           *string              `json:"id"`
	LastEditedBy *string              `json:"lastEditedBy"`
	Sections     []FullItemSections   `json:"sections"`
	State        *FullItemStateEnum   `json:"state"`
	Tags         []string             `json:"tags"`
	Title        *string              `json:"title"`
	UpdatedAt    *time.Time           `json:"updatedAt"`
	Urls         []FullItemUrls       `json:"urls"`
	Vault        FullItemVault        `json:"vault"`
	Version      *int64               `json:"version"`
}
