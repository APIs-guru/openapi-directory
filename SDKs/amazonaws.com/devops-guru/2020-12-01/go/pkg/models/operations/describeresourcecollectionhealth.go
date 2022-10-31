package operations

import (
"openapi/pkg/models/shared")


type DescribeResourceCollectionHealthResourceCollectionTypeEnum string

const (
    DescribeResourceCollectionHealthResourceCollectionTypeEnumAwsCloudFormation DescribeResourceCollectionHealthResourceCollectionTypeEnum = "AWS_CLOUD_FORMATION"
DescribeResourceCollectionHealthResourceCollectionTypeEnumAwsService DescribeResourceCollectionHealthResourceCollectionTypeEnum = "AWS_SERVICE"
)


type DescribeResourceCollectionHealthPathParams struct {
    ResourceCollectionType DescribeResourceCollectionHealthResourceCollectionTypeEnum `pathParam:"style=simple,explode=false,name=ResourceCollectionType"`
    
}

type DescribeResourceCollectionHealthQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type DescribeResourceCollectionHealthHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeResourceCollectionHealthRequest struct {
    PathParams DescribeResourceCollectionHealthPathParams 
    QueryParams DescribeResourceCollectionHealthQueryParams 
    Headers DescribeResourceCollectionHealthHeaders 
    
}

type DescribeResourceCollectionHealthResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeResourceCollectionHealthResponse *shared.DescribeResourceCollectionHealthResponse 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

