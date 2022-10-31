package operations

import (
"openapi/pkg/models/shared")


type RestoreTableFromBackupXAmzTargetEnum string

const (
    RestoreTableFromBackupXAmzTargetEnumDynamoDb20120810RestoreTableFromBackup RestoreTableFromBackupXAmzTargetEnum = "DynamoDB_20120810.RestoreTableFromBackup"
)


type RestoreTableFromBackupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RestoreTableFromBackupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RestoreTableFromBackupRequest struct {
    Headers RestoreTableFromBackupHeaders 
    Request shared.RestoreTableFromBackupInput `request:"mediaType=application/json"`
    
}

type RestoreTableFromBackupResponse struct {
    BackupInUseException *interface{} 
    BackupNotFoundException *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    LimitExceededException *interface{} 
    RestoreTableFromBackupOutput *shared.RestoreTableFromBackupOutput 
    StatusCode int64 
    TableAlreadyExistsException *interface{} 
    TableInUseException *interface{} 
    
}

