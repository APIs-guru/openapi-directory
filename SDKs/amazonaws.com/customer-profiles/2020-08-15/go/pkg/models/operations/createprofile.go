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
	Address1   *string `json:"Address1"`
	Address2   *string `json:"Address2"`
	Address3   *string `json:"Address3"`
	Address4   *string `json:"Address4"`
	City       *string `json:"City"`
	Country    *string `json:"Country"`
	County     *string `json:"County"`
	PostalCode *string `json:"PostalCode"`
	Province   *string `json:"Province"`
	State      *string `json:"State"`
}

type CreateProfileRequestBodyBillingAddress struct {
	Address1   *string `json:"Address1"`
	Address2   *string `json:"Address2"`
	Address3   *string `json:"Address3"`
	Address4   *string `json:"Address4"`
	City       *string `json:"City"`
	Country    *string `json:"Country"`
	County     *string `json:"County"`
	PostalCode *string `json:"PostalCode"`
	Province   *string `json:"Province"`
	State      *string `json:"State"`
}

type CreateProfileRequestBodyGenderEnum string

const (
	CreateProfileRequestBodyGenderEnumMale        CreateProfileRequestBodyGenderEnum = "MALE"
	CreateProfileRequestBodyGenderEnumFemale      CreateProfileRequestBodyGenderEnum = "FEMALE"
	CreateProfileRequestBodyGenderEnumUnspecified CreateProfileRequestBodyGenderEnum = "UNSPECIFIED"
)

type CreateProfileRequestBodyMailingAddress struct {
	Address1   *string `json:"Address1"`
	Address2   *string `json:"Address2"`
	Address3   *string `json:"Address3"`
	Address4   *string `json:"Address4"`
	City       *string `json:"City"`
	Country    *string `json:"Country"`
	County     *string `json:"County"`
	PostalCode *string `json:"PostalCode"`
	Province   *string `json:"Province"`
	State      *string `json:"State"`
}

type CreateProfileRequestBodyPartyTypeEnum string

const (
	CreateProfileRequestBodyPartyTypeEnumIndividual CreateProfileRequestBodyPartyTypeEnum = "INDIVIDUAL"
	CreateProfileRequestBodyPartyTypeEnumBusiness   CreateProfileRequestBodyPartyTypeEnum = "BUSINESS"
	CreateProfileRequestBodyPartyTypeEnumOther      CreateProfileRequestBodyPartyTypeEnum = "OTHER"
)

type CreateProfileRequestBodyShippingAddress struct {
	Address1   *string `json:"Address1"`
	Address2   *string `json:"Address2"`
	Address3   *string `json:"Address3"`
	Address4   *string `json:"Address4"`
	City       *string `json:"City"`
	Country    *string `json:"Country"`
	County     *string `json:"County"`
	PostalCode *string `json:"PostalCode"`
	Province   *string `json:"Province"`
	State      *string `json:"State"`
}

type CreateProfileRequestBody struct {
	AccountNumber         *string                                  `json:"AccountNumber"`
	AdditionalInformation *string                                  `json:"AdditionalInformation"`
	Address               *CreateProfileRequestBodyAddress         `json:"Address"`
	Attributes            map[string]string                        `json:"Attributes"`
	BillingAddress        *CreateProfileRequestBodyBillingAddress  `json:"BillingAddress"`
	BirthDate             *string                                  `json:"BirthDate"`
	BusinessEmailAddress  *string                                  `json:"BusinessEmailAddress"`
	BusinessName          *string                                  `json:"BusinessName"`
	BusinessPhoneNumber   *string                                  `json:"BusinessPhoneNumber"`
	EmailAddress          *string                                  `json:"EmailAddress"`
	FirstName             *string                                  `json:"FirstName"`
	Gender                *CreateProfileRequestBodyGenderEnum      `json:"Gender"`
	HomePhoneNumber       *string                                  `json:"HomePhoneNumber"`
	LastName              *string                                  `json:"LastName"`
	MailingAddress        *CreateProfileRequestBodyMailingAddress  `json:"MailingAddress"`
	MiddleName            *string                                  `json:"MiddleName"`
	MobilePhoneNumber     *string                                  `json:"MobilePhoneNumber"`
	PartyType             *CreateProfileRequestBodyPartyTypeEnum   `json:"PartyType"`
	PersonalEmailAddress  *string                                  `json:"PersonalEmailAddress"`
	PhoneNumber           *string                                  `json:"PhoneNumber"`
	ShippingAddress       *CreateProfileRequestBodyShippingAddress `json:"ShippingAddress"`
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
