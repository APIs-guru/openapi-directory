package operations

import (
"openapi/pkg/models/shared")


type ListAccessPoliciesIdentityTypeEnum string

const (
    ListAccessPoliciesIdentityTypeEnumUser ListAccessPoliciesIdentityTypeEnum = "USER"
ListAccessPoliciesIdentityTypeEnumGroup ListAccessPoliciesIdentityTypeEnum = "GROUP"
ListAccessPoliciesIdentityTypeEnumIam ListAccessPoliciesIdentityTypeEnum = "IAM"
)



type ListAccessPoliciesResourceTypeEnum string

const (
    ListAccessPoliciesResourceTypeEnumPortal ListAccessPoliciesResourceTypeEnum = "PORTAL"
ListAccessPoliciesResourceTypeEnumProject ListAccessPoliciesResourceTypeEnum = "PROJECT"
)


type ListAccessPoliciesQueryParams struct {
    IamArn *string `queryParam:"style=form,explode=true,name=iamArn"`
    IdentityID *string `queryParam:"style=form,explode=true,name=identityId"`
    IdentityType *ListAccessPoliciesIdentityTypeEnum `queryParam:"style=form,explode=true,name=identityType"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    ResourceID *string `queryParam:"style=form,explode=true,name=resourceId"`
    ResourceType *ListAccessPoliciesResourceTypeEnum `queryParam:"style=form,explode=true,name=resourceType"`
    
}

type ListAccessPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListAccessPoliciesRequest struct {
    QueryParams ListAccessPoliciesQueryParams 
    Headers ListAccessPoliciesHeaders 
    
}

type ListAccessPoliciesResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListAccessPoliciesResponse *shared.ListAccessPoliciesResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

