package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProfilePathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type CreateProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateProfileRequestBodyAddress struct {
	Address1   *string `json:"Address1,omitempty"`
	Address2   *string `json:"Address2,omitempty"`
	Address3   *string `json:"Address3,omitempty"`
	Address4   *string `json:"Address4,omitempty"`
	City       *string `json:"City,omitempty"`
	Country    *string `json:"Country,omitempty"`
	County     *string `json:"County,omitempty"`
	PostalCode *string `json:"PostalCode,omitempty"`
	Province   *string `json:"Province,omitempty"`
	State      *string `json:"State,omitempty"`
}

type CreateProfileRequestBodyBillingAddress struct {
	Address1   *string `json:"Address1,omitempty"`
	Address2   *string `json:"Address2,omitempty"`
	Address3   *string `json:"Address3,omitempty"`
	Address4   *string `json:"Address4,omitempty"`
	City       *string `json:"City,omitempty"`
	Country    *string `json:"Country,omitempty"`
	County     *string `json:"County,omitempty"`
	PostalCode *string `json:"PostalCode,omitempty"`
	Province   *string `json:"Province,omitempty"`
	State      *string `json:"State,omitempty"`
}

type CreateProfileRequestBodyGenderEnum string

const (
	CreateProfileRequestBodyGenderEnumMale        CreateProfileRequestBodyGenderEnum = "MALE"
	CreateProfileRequestBodyGenderEnumFemale      CreateProfileRequestBodyGenderEnum = "FEMALE"
	CreateProfileRequestBodyGenderEnumUnspecified CreateProfileRequestBodyGenderEnum = "UNSPECIFIED"
)

type CreateProfileRequestBodyMailingAddress struct {
	Address1   *string `json:"Address1,omitempty"`
	Address2   *string `json:"Address2,omitempty"`
	Address3   *string `json:"Address3,omitempty"`
	Address4   *string `json:"Address4,omitempty"`
	City       *string `json:"City,omitempty"`
	Country    *string `json:"Country,omitempty"`
	County     *string `json:"County,omitempty"`
	PostalCode *string `json:"PostalCode,omitempty"`
	Province   *string `json:"Province,omitempty"`
	State      *string `json:"State,omitempty"`
}

type CreateProfileRequestBodyPartyTypeEnum string

const (
	CreateProfileRequestBodyPartyTypeEnumIndividual CreateProfileRequestBodyPartyTypeEnum = "INDIVIDUAL"
	CreateProfileRequestBodyPartyTypeEnumBusiness   CreateProfileRequestBodyPartyTypeEnum = "BUSINESS"
	CreateProfileRequestBodyPartyTypeEnumOther      CreateProfileRequestBodyPartyTypeEnum = "OTHER"
)

type CreateProfileRequestBodyShippingAddress struct {
	Address1   *string `json:"Address1,omitempty"`
	Address2   *string `json:"Address2,omitempty"`
	Address3   *string `json:"Address3,omitempty"`
	Address4   *string `json:"Address4,omitempty"`
	City       *string `json:"City,omitempty"`
	Country    *string `json:"Country,omitempty"`
	County     *string `json:"County,omitempty"`
	PostalCode *string `json:"PostalCode,omitempty"`
	Province   *string `json:"Province,omitempty"`
	State      *string `json:"State,omitempty"`
}

type CreateProfileRequestBody struct {
	AccountNumber         *string                                  `json:"AccountNumber,omitempty"`
	AdditionalInformation *string                                  `json:"AdditionalInformation,omitempty"`
	Address               *CreateProfileRequestBodyAddress         `json:"Address,omitempty"`
	Attributes            map[string]string                        `json:"Attributes,omitempty"`
	BillingAddress        *CreateProfileRequestBodyBillingAddress  `json:"BillingAddress,omitempty"`
	BirthDate             *string                                  `json:"BirthDate,omitempty"`
	BusinessEmailAddress  *string                                  `json:"BusinessEmailAddress,omitempty"`
	BusinessName          *string                                  `json:"BusinessName,omitempty"`
	BusinessPhoneNumber   *string                                  `json:"BusinessPhoneNumber,omitempty"`
	EmailAddress          *string                                  `json:"EmailAddress,omitempty"`
	FirstName             *string                                  `json:"FirstName,omitempty"`
	Gender                *CreateProfileRequestBodyGenderEnum      `json:"Gender,omitempty"`
	HomePhoneNumber       *string                                  `json:"HomePhoneNumber,omitempty"`
	LastName              *string                                  `json:"LastName,omitempty"`
	MailingAddress        *CreateProfileRequestBodyMailingAddress  `json:"MailingAddress,omitempty"`
	MiddleName            *string                                  `json:"MiddleName,omitempty"`
	MobilePhoneNumber     *string                                  `json:"MobilePhoneNumber,omitempty"`
	PartyType             *CreateProfileRequestBodyPartyTypeEnum   `json:"PartyType,omitempty"`
	PersonalEmailAddress  *string                                  `json:"PersonalEmailAddress,omitempty"`
	PhoneNumber           *string                                  `json:"PhoneNumber,omitempty"`
	ShippingAddress       *CreateProfileRequestBodyShippingAddress `json:"ShippingAddress,omitempty"`
}

type CreateProfileRequest struct {
	PathParams CreateProfilePathParams
	Headers    CreateProfileHeaders
	Request    CreateProfileRequestBody `request:"mediaType=application/json"`
}

type CreateProfileResponse struct {
	AccessDeniedException     *interface{}
	BadRequestException       *interface{}
	ContentType               string
	CreateProfileResponse     *shared.CreateProfileResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
