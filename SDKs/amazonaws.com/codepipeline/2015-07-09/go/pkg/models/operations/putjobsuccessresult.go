package operations

import (
"openapi/pkg/models/shared")


type PutJobSuccessResultXAmzTargetEnum string

const (
    PutJobSuccessResultXAmzTargetEnumCodePipeline20150709PutJobSuccessResult PutJobSuccessResultXAmzTargetEnum = "CodePipeline_20150709.PutJobSuccessResult"
)


type PutJobSuccessResultHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutJobSuccessResultXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutJobSuccessResultRequest struct {
    Headers PutJobSuccessResultHeaders 
    Request shared.PutJobSuccessResultInput `request:"mediaType=application/json"`
    
}

type PutJobSuccessResultResponse struct {
    ContentType string 
    InvalidJobStateException *interface{} 
    JobNotFoundException *interface{} 
    OutputVariablesSizeExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

