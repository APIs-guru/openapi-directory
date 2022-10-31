package operations

import (
"openapi/pkg/models/shared")

type DescribeCodeReviewPathParams struct {
    CodeReviewArn string `pathParam:"style=simple,explode=false,name=CodeReviewArn"`
    
}

type DescribeCodeReviewHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeCodeReviewRequest struct {
    PathParams DescribeCodeReviewPathParams 
    Headers DescribeCodeReviewHeaders 
    
}

type DescribeCodeReviewResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeCodeReviewResponse *shared.DescribeCodeReviewResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

