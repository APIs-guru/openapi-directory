package operations

import (
"openapi/pkg/models/shared")

type MergeProfilesPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
    
}

type MergeProfilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type MergeProfilesRequestBodyFieldSourceProfileIds struct {
    AccountNumber *string `json:"AccountNumber,omitempty"`
    AdditionalInformation *string `json:"AdditionalInformation,omitempty"`
    Address *string `json:"Address,omitempty"`
    Attributes map[string]string `json:"Attributes,omitempty"`
    BillingAddress *string `json:"BillingAddress,omitempty"`
    BirthDate *string `json:"BirthDate,omitempty"`
    BusinessEmailAddress *string `json:"BusinessEmailAddress,omitempty"`
    BusinessName *string `json:"BusinessName,omitempty"`
    BusinessPhoneNumber *string `json:"BusinessPhoneNumber,omitempty"`
    EmailAddress *string `json:"EmailAddress,omitempty"`
    FirstName *string `json:"FirstName,omitempty"`
    Gender *string `json:"Gender,omitempty"`
    HomePhoneNumber *string `json:"HomePhoneNumber,omitempty"`
    LastName *string `json:"LastName,omitempty"`
    MailingAddress *string `json:"MailingAddress,omitempty"`
    MiddleName *string `json:"MiddleName,omitempty"`
    MobilePhoneNumber *string `json:"MobilePhoneNumber,omitempty"`
    PartyType *string `json:"PartyType,omitempty"`
    PersonalEmailAddress *string `json:"PersonalEmailAddress,omitempty"`
    PhoneNumber *string `json:"PhoneNumber,omitempty"`
    ShippingAddress *string `json:"ShippingAddress,omitempty"`
    
}

type MergeProfilesRequestBody struct {
    FieldSourceProfileIds *MergeProfilesRequestBodyFieldSourceProfileIds `json:"FieldSourceProfileIds,omitempty"`
    MainProfileID string `json:"MainProfileId"`
    ProfileIdsToBeMerged []string `json:"ProfileIdsToBeMerged"`
    
}

type MergeProfilesRequest struct {
    PathParams MergeProfilesPathParams 
    Headers MergeProfilesHeaders 
    Request MergeProfilesRequestBody `request:"mediaType=application/json"`
    
}

type MergeProfilesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    MergeProfilesResponse *shared.MergeProfilesResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

