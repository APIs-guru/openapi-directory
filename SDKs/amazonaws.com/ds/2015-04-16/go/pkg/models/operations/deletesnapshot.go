package operations

import (
"openapi/pkg/models/shared")


type DeleteSnapshotXAmzTargetEnum string

const (
    DeleteSnapshotXAmzTargetEnumDirectoryService20150416DeleteSnapshot DeleteSnapshotXAmzTargetEnum = "DirectoryService_20150416.DeleteSnapshot"
)


type DeleteSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteSnapshotRequest struct {
    Headers DeleteSnapshotHeaders 
    Request shared.DeleteSnapshotRequest `request:"mediaType=application/json"`
    
}

type DeleteSnapshotResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeleteSnapshotResult *shared.DeleteSnapshotResult 
    EntityDoesNotExistException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    
}

