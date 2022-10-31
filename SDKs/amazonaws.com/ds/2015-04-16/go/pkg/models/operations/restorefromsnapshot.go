package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreFromSnapshotXAmzTargetEnum string

const (
	RestoreFromSnapshotXAmzTargetEnumDirectoryService20150416RestoreFromSnapshot RestoreFromSnapshotXAmzTargetEnum = "DirectoryService_20150416.RestoreFromSnapshot"
)

type RestoreFromSnapshotHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RestoreFromSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RestoreFromSnapshotRequest struct {
	Headers RestoreFromSnapshotHeaders
	Request shared.RestoreFromSnapshotRequest `request:"mediaType=application/json"`
}

type RestoreFromSnapshotResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	InvalidParameterException   *interface{}
	RestoreFromSnapshotResult   map[string]interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
