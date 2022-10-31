package operations

import (
"openapi/pkg/models/shared")

type DescribeFileSystemAliasesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeFileSystemAliasesXAmzTargetEnum string

const (
    DescribeFileSystemAliasesXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeFileSystemAliases DescribeFileSystemAliasesXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases"
)


type DescribeFileSystemAliasesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeFileSystemAliasesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeFileSystemAliasesRequest struct {
    QueryParams DescribeFileSystemAliasesQueryParams 
    Headers DescribeFileSystemAliasesHeaders 
    Request shared.DescribeFileSystemAliasesRequest `request:"mediaType=application/json"`
    
}

type DescribeFileSystemAliasesResponse struct {
    BadRequest *interface{} 
    ContentType string 
    DescribeFileSystemAliasesResponse *shared.DescribeFileSystemAliasesResponse 
    FileSystemNotFound *interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

