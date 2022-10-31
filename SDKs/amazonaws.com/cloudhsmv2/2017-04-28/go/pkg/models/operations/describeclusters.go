package operations

import (
"openapi/pkg/models/shared")

type DescribeClustersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeClustersXAmzTargetEnum string

const (
    DescribeClustersXAmzTargetEnumBaldrAPIServiceDescribeClusters DescribeClustersXAmzTargetEnum = "BaldrApiService.DescribeClusters"
)


type DescribeClustersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeClustersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeClustersRequest struct {
    QueryParams DescribeClustersQueryParams 
    Headers DescribeClustersHeaders 
    Request shared.DescribeClustersRequest `request:"mediaType=application/json"`
    
}

type DescribeClustersResponse struct {
    CloudHsmAccessDeniedException *interface{} 
    CloudHsmInternalFailureException *interface{} 
    CloudHsmInvalidRequestException *interface{} 
    CloudHsmServiceException *interface{} 
    CloudHsmTagException *interface{} 
    ContentType string 
    DescribeClustersResponse *shared.DescribeClustersResponse 
    StatusCode int64 
    
}

