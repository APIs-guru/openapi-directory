package operations

import (
"openapi/pkg/models/shared")

type ListTagsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListTagsXAmzTargetEnum string

const (
    ListTagsXAmzTargetEnumBaldrAPIServiceListTags ListTagsXAmzTargetEnum = "BaldrApiService.ListTags"
)


type ListTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTagsRequest struct {
    QueryParams ListTagsQueryParams 
    Headers ListTagsHeaders 
    Request shared.ListTagsRequest `request:"mediaType=application/json"`
    
}

type ListTagsResponse struct {
    CloudHsmAccessDeniedException *interface{} 
    CloudHsmInternalFailureException *interface{} 
    CloudHsmInvalidRequestException *interface{} 
    CloudHsmResourceNotFoundException *interface{} 
    CloudHsmServiceException *interface{} 
    CloudHsmTagException *interface{} 
    ContentType string 
    ListTagsResponse *shared.ListTagsResponse 
    StatusCode int64 
    
}

