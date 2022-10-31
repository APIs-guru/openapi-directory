package operations

import (
"openapi/pkg/models/shared")


type ListPartnerEventSourceAccountsXAmzTargetEnum string

const (
    ListPartnerEventSourceAccountsXAmzTargetEnumAwsEventsListPartnerEventSourceAccounts ListPartnerEventSourceAccountsXAmzTargetEnum = "AWSEvents.ListPartnerEventSourceAccounts"
)


type ListPartnerEventSourceAccountsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListPartnerEventSourceAccountsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListPartnerEventSourceAccountsRequest struct {
    Headers ListPartnerEventSourceAccountsHeaders 
    Request shared.ListPartnerEventSourceAccountsRequest `request:"mediaType=application/json"`
    
}

type ListPartnerEventSourceAccountsResponse struct {
    ContentType string 
    InternalException *interface{} 
    ListPartnerEventSourceAccountsResponse *shared.ListPartnerEventSourceAccountsResponse 
    OperationDisabledException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

