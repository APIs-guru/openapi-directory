package operations

import (
"openapi/pkg/models/shared")

type DescribeBackupsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeBackupsXAmzTargetEnum string

const (
    DescribeBackupsXAmzTargetEnumBaldrAPIServiceDescribeBackups DescribeBackupsXAmzTargetEnum = "BaldrApiService.DescribeBackups"
)


type DescribeBackupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeBackupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeBackupsRequest struct {
    QueryParams DescribeBackupsQueryParams 
    Headers DescribeBackupsHeaders 
    Request shared.DescribeBackupsRequest `request:"mediaType=application/json"`
    
}

type DescribeBackupsResponse struct {
    CloudHsmAccessDeniedException *interface{} 
    CloudHsmInternalFailureException *interface{} 
    CloudHsmInvalidRequestException *interface{} 
    CloudHsmResourceNotFoundException *interface{} 
    CloudHsmServiceException *interface{} 
    CloudHsmTagException *interface{} 
    ContentType string 
    DescribeBackupsResponse *shared.DescribeBackupsResponse 
    StatusCode int64 
    
}

