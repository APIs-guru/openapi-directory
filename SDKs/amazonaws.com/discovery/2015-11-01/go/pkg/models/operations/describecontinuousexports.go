package operations

import (
"openapi/pkg/models/shared")

type DescribeContinuousExportsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type DescribeContinuousExportsXAmzTargetEnum string

const (
    DescribeContinuousExportsXAmzTargetEnumAwsPoseidonServiceV20151101DescribeContinuousExports DescribeContinuousExportsXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DescribeContinuousExports"
)


type DescribeContinuousExportsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeContinuousExportsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeContinuousExportsRequest struct {
    QueryParams DescribeContinuousExportsQueryParams 
    Headers DescribeContinuousExportsHeaders 
    Request shared.DescribeContinuousExportsRequest `request:"mediaType=application/json"`
    
}

type DescribeContinuousExportsResponse struct {
    AuthorizationErrorException *interface{} 
    ContentType string 
    DescribeContinuousExportsResponse *shared.DescribeContinuousExportsResponse 
    HomeRegionNotSetException *interface{} 
    InvalidParameterException *interface{} 
    InvalidParameterValueException *interface{} 
    OperationNotPermittedException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerInternalErrorException *interface{} 
    StatusCode int64 
    
}

