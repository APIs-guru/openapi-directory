package operations

import (
"openapi/pkg/models/shared")


type CreateReportGroupXAmzTargetEnum string

const (
    CreateReportGroupXAmzTargetEnumCodeBuild20161006CreateReportGroup CreateReportGroupXAmzTargetEnum = "CodeBuild_20161006.CreateReportGroup"
)


type CreateReportGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateReportGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateReportGroupRequest struct {
    Headers CreateReportGroupHeaders 
    Request shared.CreateReportGroupInput `request:"mediaType=application/json"`
    
}

type CreateReportGroupResponse struct {
    AccountLimitExceededException *interface{} 
    ContentType string 
    CreateReportGroupOutput *shared.CreateReportGroupOutput 
    InvalidInputException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    
}

