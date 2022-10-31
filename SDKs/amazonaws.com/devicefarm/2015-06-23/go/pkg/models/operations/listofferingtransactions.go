package operations

import (
"openapi/pkg/models/shared")

type ListOfferingTransactionsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListOfferingTransactionsXAmzTargetEnum string

const (
    ListOfferingTransactionsXAmzTargetEnumDeviceFarm20150623ListOfferingTransactions ListOfferingTransactionsXAmzTargetEnum = "DeviceFarm_20150623.ListOfferingTransactions"
)


type ListOfferingTransactionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListOfferingTransactionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListOfferingTransactionsRequest struct {
    QueryParams ListOfferingTransactionsQueryParams 
    Headers ListOfferingTransactionsHeaders 
    Request shared.ListOfferingTransactionsRequest `request:"mediaType=application/json"`
    
}

type ListOfferingTransactionsResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    ListOfferingTransactionsResult *shared.ListOfferingTransactionsResult 
    NotEligibleException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

