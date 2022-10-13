package shared

type Profile struct {
	AccountNumber         *string           `json:"AccountNumber"`
	AdditionalInformation *string           `json:"AdditionalInformation"`
	Address               *Address          `json:"Address"`
	Attributes            map[string]string `json:"Attributes"`
	BillingAddress        *Address          `json:"BillingAddress"`
	BirthDate             *string           `json:"BirthDate"`
	BusinessEmailAddress  *string           `json:"BusinessEmailAddress"`
	BusinessName          *string           `json:"BusinessName"`
	BusinessPhoneNumber   *string           `json:"BusinessPhoneNumber"`
	EmailAddress          *string           `json:"EmailAddress"`
	FirstName             *string           `json:"FirstName"`
	Gender                *GenderEnum       `json:"Gender"`
	HomePhoneNumber       *string           `json:"HomePhoneNumber"`
	LastName              *string           `json:"LastName"`
	MailingAddress        *Address          `json:"MailingAddress"`
	MiddleName            *string           `json:"MiddleName"`
	MobilePhoneNumber     *string           `json:"MobilePhoneNumber"`
	PartyType             *PartyTypeEnum    `json:"PartyType"`
	PersonalEmailAddress  *string           `json:"PersonalEmailAddress"`
	PhoneNumber           *string           `json:"PhoneNumber"`
	ProfileID             *string           `json:"ProfileId"`
	ShippingAddress       *Address          `json:"ShippingAddress"`
}
