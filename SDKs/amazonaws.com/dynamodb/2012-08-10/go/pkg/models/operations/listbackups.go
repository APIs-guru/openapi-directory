package operations

import (
"openapi/pkg/models/shared")


type ListBackupsXAmzTargetEnum string

const (
    ListBackupsXAmzTargetEnumDynamoDb20120810ListBackups ListBackupsXAmzTargetEnum = "DynamoDB_20120810.ListBackups"
)


type ListBackupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListBackupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListBackupsRequest struct {
    Headers ListBackupsHeaders 
    Request shared.ListBackupsInput `request:"mediaType=application/json"`
    
}

type ListBackupsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    ListBackupsOutput *shared.ListBackupsOutput 
    StatusCode int64 
    
}

