package operations

import (
"openapi/pkg/models/shared")

type DescribeUpdatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    UpdateID string `pathParam:"style=simple,explode=false,name=updateId"`
    
}

type DescribeUpdateQueryParams struct {
    AddonName *string `queryParam:"style=form,explode=true,name=addonName"`
    NodegroupName *string `queryParam:"style=form,explode=true,name=nodegroupName"`
    
}

type DescribeUpdateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeUpdateRequest struct {
    PathParams DescribeUpdatePathParams 
    QueryParams DescribeUpdateQueryParams 
    Headers DescribeUpdateHeaders 
    
}

type DescribeUpdateResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeUpdateResponse *shared.DescribeUpdateResponse 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

