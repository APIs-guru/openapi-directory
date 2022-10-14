package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProfilePathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type UpdateProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateProfileRequestBodyAddress struct {
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

type UpdateProfileRequestBodyBillingAddress struct {
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

type UpdateProfileRequestBodyGenderEnum string

const (
	UpdateProfileRequestBodyGenderEnumMale        UpdateProfileRequestBodyGenderEnum = "MALE"
	UpdateProfileRequestBodyGenderEnumFemale      UpdateProfileRequestBodyGenderEnum = "FEMALE"
	UpdateProfileRequestBodyGenderEnumUnspecified UpdateProfileRequestBodyGenderEnum = "UNSPECIFIED"
)

type UpdateProfileRequestBodyMailingAddress struct {
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

type UpdateProfileRequestBodyPartyTypeEnum string

const (
	UpdateProfileRequestBodyPartyTypeEnumIndividual UpdateProfileRequestBodyPartyTypeEnum = "INDIVIDUAL"
	UpdateProfileRequestBodyPartyTypeEnumBusiness   UpdateProfileRequestBodyPartyTypeEnum = "BUSINESS"
	UpdateProfileRequestBodyPartyTypeEnumOther      UpdateProfileRequestBodyPartyTypeEnum = "OTHER"
)

type UpdateProfileRequestBodyShippingAddress struct {
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

type UpdateProfileRequestBody struct {
	AccountNumber         *string                                  `json:"AccountNumber,omitempty"`
	AdditionalInformation *string                                  `json:"AdditionalInformation,omitempty"`
	Address               *UpdateProfileRequestBodyAddress         `json:"Address,omitempty"`
	Attributes            map[string]string                        `json:"Attributes,omitempty"`
	BillingAddress        *UpdateProfileRequestBodyBillingAddress  `json:"BillingAddress,omitempty"`
	BirthDate             *string                                  `json:"BirthDate,omitempty"`
	BusinessEmailAddress  *string                                  `json:"BusinessEmailAddress,omitempty"`
	BusinessName          *string                                  `json:"BusinessName,omitempty"`
	BusinessPhoneNumber   *string                                  `json:"BusinessPhoneNumber,omitempty"`
	EmailAddress          *string                                  `json:"EmailAddress,omitempty"`
	FirstName             *string                                  `json:"FirstName,omitempty"`
	Gender                *UpdateProfileRequestBodyGenderEnum      `json:"Gender,omitempty"`
	HomePhoneNumber       *string                                  `json:"HomePhoneNumber,omitempty"`
	LastName              *string                                  `json:"LastName,omitempty"`
	MailingAddress        *UpdateProfileRequestBodyMailingAddress  `json:"MailingAddress,omitempty"`
	MiddleName            *string                                  `json:"MiddleName,omitempty"`
	MobilePhoneNumber     *string                                  `json:"MobilePhoneNumber,omitempty"`
	PartyType             *UpdateProfileRequestBodyPartyTypeEnum   `json:"PartyType,omitempty"`
	PersonalEmailAddress  *string                                  `json:"PersonalEmailAddress,omitempty"`
	PhoneNumber           *string                                  `json:"PhoneNumber,omitempty"`
	ProfileID             string                                   `json:"ProfileId"`
	ShippingAddress       *UpdateProfileRequestBodyShippingAddress `json:"ShippingAddress,omitempty"`
}

type UpdateProfileRequest struct {
	PathParams UpdateProfilePathParams
	Headers    UpdateProfileHeaders
	Request    UpdateProfileRequestBody `request:"mediaType=application/json"`
}

type UpdateProfileResponse struct {
	AccessDeniedException     *interface{}
	BadRequestException       *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateProfileResponse     *shared.UpdateProfileResponse
}
