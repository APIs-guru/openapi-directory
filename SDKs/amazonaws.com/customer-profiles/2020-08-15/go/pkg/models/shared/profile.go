package shared

type Profile struct {
	AccountNumber         *string           `json:"AccountNumber,omitempty"`
	AdditionalInformation *string           `json:"AdditionalInformation,omitempty"`
	Address               *Address          `json:"Address,omitempty"`
	Attributes            map[string]string `json:"Attributes,omitempty"`
	BillingAddress        *Address          `json:"BillingAddress,omitempty"`
	BirthDate             *string           `json:"BirthDate,omitempty"`
	BusinessEmailAddress  *string           `json:"BusinessEmailAddress,omitempty"`
	BusinessName          *string           `json:"BusinessName,omitempty"`
	BusinessPhoneNumber   *string           `json:"BusinessPhoneNumber,omitempty"`
	EmailAddress          *string           `json:"EmailAddress,omitempty"`
	FirstName             *string           `json:"FirstName,omitempty"`
	Gender                *GenderEnum       `json:"Gender,omitempty"`
	HomePhoneNumber       *string           `json:"HomePhoneNumber,omitempty"`
	LastName              *string           `json:"LastName,omitempty"`
	MailingAddress        *Address          `json:"MailingAddress,omitempty"`
	MiddleName            *string           `json:"MiddleName,omitempty"`
	MobilePhoneNumber     *string           `json:"MobilePhoneNumber,omitempty"`
	PartyType             *PartyTypeEnum    `json:"PartyType,omitempty"`
	PersonalEmailAddress  *string           `json:"PersonalEmailAddress,omitempty"`
	PhoneNumber           *string           `json:"PhoneNumber,omitempty"`
	ProfileID             *string           `json:"ProfileId,omitempty"`
	ShippingAddress       *Address          `json:"ShippingAddress,omitempty"`
}
