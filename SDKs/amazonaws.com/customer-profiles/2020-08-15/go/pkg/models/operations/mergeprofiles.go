package operations

import (
	"openapi/pkg/models/shared"
)

type MergeProfilesPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type MergeProfilesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type MergeProfilesRequestBodyFieldSourceProfileIds struct {
	AccountNumber         *string           `json:"AccountNumber"`
	AdditionalInformation *string           `json:"AdditionalInformation"`
	Address               *string           `json:"Address"`
	Attributes            map[string]string `json:"Attributes"`
	BillingAddress        *string           `json:"BillingAddress"`
	BirthDate             *string           `json:"BirthDate"`
	BusinessEmailAddress  *string           `json:"BusinessEmailAddress"`
	BusinessName          *string           `json:"BusinessName"`
	BusinessPhoneNumber   *string           `json:"BusinessPhoneNumber"`
	EmailAddress          *string           `json:"EmailAddress"`
	FirstName             *string           `json:"FirstName"`
	Gender                *string           `json:"Gender"`
	HomePhoneNumber       *string           `json:"HomePhoneNumber"`
	LastName              *string           `json:"LastName"`
	MailingAddress        *string           `json:"MailingAddress"`
	MiddleName            *string           `json:"MiddleName"`
	MobilePhoneNumber     *string           `json:"MobilePhoneNumber"`
	PartyType             *string           `json:"PartyType"`
	PersonalEmailAddress  *string           `json:"PersonalEmailAddress"`
	PhoneNumber           *string           `json:"PhoneNumber"`
	ShippingAddress       *string           `json:"ShippingAddress"`
}

type MergeProfilesRequestBody struct {
	FieldSourceProfileIds *MergeProfilesRequestBodyFieldSourceProfileIds `json:"FieldSourceProfileIds"`
	MainProfileID         string                                         `json:"MainProfileId"`
	ProfileIdsToBeMerged  []string                                       `json:"ProfileIdsToBeMerged"`
}

type MergeProfilesRequest struct {
	PathParams MergeProfilesPathParams
	Headers    MergeProfilesHeaders
	Request    MergeProfilesRequestBody `request:"mediaType=application/json"`
}

type MergeProfilesResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	InternalServerException   *interface{}
	MergeProfilesResponse     *shared.MergeProfilesResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
