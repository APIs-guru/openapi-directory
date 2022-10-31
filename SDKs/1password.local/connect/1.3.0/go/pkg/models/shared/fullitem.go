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
	ID    *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
}

type FullItemStateEnum string

const (
	FullItemStateEnumArchived FullItemStateEnum = "ARCHIVED"
	FullItemStateEnumDeleted  FullItemStateEnum = "DELETED"
)

type FullItemUrls struct {
	Href    string `json:"href"`
	Primary *bool  `json:"primary,omitempty"`
}

type FullItemVault struct {
	ID string `json:"id"`
}

type FullItem struct {
	Category     FullItemCategoryEnum `json:"category"`
	CreatedAt    *time.Time           `json:"createdAt,omitempty"`
	Favorite     *bool                `json:"favorite,omitempty"`
	Fields       []Field              `json:"fields,omitempty"`
	Files        []File               `json:"files,omitempty"`
	ID           *string              `json:"id,omitempty"`
	LastEditedBy *string              `json:"lastEditedBy,omitempty"`
	Sections     []FullItemSections   `json:"sections,omitempty"`
	State        *FullItemStateEnum   `json:"state,omitempty"`
	Tags         []string             `json:"tags,omitempty"`
	Title        *string              `json:"title,omitempty"`
	UpdatedAt    *time.Time           `json:"updatedAt,omitempty"`
	Urls         []FullItemUrls       `json:"urls,omitempty"`
	Vault        FullItemVault        `json:"vault"`
	Version      *int64               `json:"version,omitempty"`
}
