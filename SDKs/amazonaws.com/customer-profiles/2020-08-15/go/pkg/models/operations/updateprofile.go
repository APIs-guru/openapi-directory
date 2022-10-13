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

type UpdateProfileRequestBodyBillingAddress struct {
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

type UpdateProfileRequestBodyGenderEnum string

const (
	UpdateProfileRequestBodyGenderEnumMale        UpdateProfileRequestBodyGenderEnum = "MALE"
	UpdateProfileRequestBodyGenderEnumFemale      UpdateProfileRequestBodyGenderEnum = "FEMALE"
	UpdateProfileRequestBodyGenderEnumUnspecified UpdateProfileRequestBodyGenderEnum = "UNSPECIFIED"
)

type UpdateProfileRequestBodyMailingAddress struct {
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

type UpdateProfileRequestBodyPartyTypeEnum string

const (
	UpdateProfileRequestBodyPartyTypeEnumIndividual UpdateProfileRequestBodyPartyTypeEnum = "INDIVIDUAL"
	UpdateProfileRequestBodyPartyTypeEnumBusiness   UpdateProfileRequestBodyPartyTypeEnum = "BUSINESS"
	UpdateProfileRequestBodyPartyTypeEnumOther      UpdateProfileRequestBodyPartyTypeEnum = "OTHER"
)

type UpdateProfileRequestBodyShippingAddress struct {
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

type UpdateProfileRequestBody struct {
	AccountNumber         *string                                  `json:"AccountNumber"`
	AdditionalInformation *string                                  `json:"AdditionalInformation"`
	Address               *UpdateProfileRequestBodyAddress         `json:"Address"`
	Attributes            map[string]string                        `json:"Attributes"`
	BillingAddress        *UpdateProfileRequestBodyBillingAddress  `json:"BillingAddress"`
	BirthDate             *string                                  `json:"BirthDate"`
	BusinessEmailAddress  *string                                  `json:"BusinessEmailAddress"`
	BusinessName          *string                                  `json:"BusinessName"`
	BusinessPhoneNumber   *string                                  `json:"BusinessPhoneNumber"`
	EmailAddress          *string                                  `json:"EmailAddress"`
	FirstName             *string                                  `json:"FirstName"`
	Gender                *UpdateProfileRequestBodyGenderEnum      `json:"Gender"`
	HomePhoneNumber       *string                                  `json:"HomePhoneNumber"`
	LastName              *string                                  `json:"LastName"`
	MailingAddress        *UpdateProfileRequestBodyMailingAddress  `json:"MailingAddress"`
	MiddleName            *string                                  `json:"MiddleName"`
	MobilePhoneNumber     *string                                  `json:"MobilePhoneNumber"`
	PartyType             *UpdateProfileRequestBodyPartyTypeEnum   `json:"PartyType"`
	PersonalEmailAddress  *string                                  `json:"PersonalEmailAddress"`
	PhoneNumber           *string                                  `json:"PhoneNumber"`
	ProfileID             string                                   `json:"ProfileId"`
	ShippingAddress       *UpdateProfileRequestBodyShippingAddress `json:"ShippingAddress"`
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
