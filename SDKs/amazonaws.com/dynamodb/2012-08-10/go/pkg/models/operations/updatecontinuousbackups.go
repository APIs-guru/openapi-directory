package operations

import (
"openapi/pkg/models/shared")


type UpdateContinuousBackupsXAmzTargetEnum string

const (
    UpdateContinuousBackupsXAmzTargetEnumDynamoDb20120810UpdateContinuousBackups UpdateContinuousBackupsXAmzTargetEnum = "DynamoDB_20120810.UpdateContinuousBackups"
)


type UpdateContinuousBackupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateContinuousBackupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateContinuousBackupsRequest struct {
    Headers UpdateContinuousBackupsHeaders 
    Request shared.UpdateContinuousBackupsInput `request:"mediaType=application/json"`
    
}

type UpdateContinuousBackupsResponse struct {
    ContentType string 
    ContinuousBackupsUnavailableException *interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    TableNotFoundException *interface{} 
    UpdateContinuousBackupsOutput *shared.UpdateContinuousBackupsOutput 
    
}

