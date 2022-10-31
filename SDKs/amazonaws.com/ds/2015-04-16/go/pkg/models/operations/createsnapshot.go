package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSnapshotXAmzTargetEnum string

const (
	CreateSnapshotXAmzTargetEnumDirectoryService20150416CreateSnapshot CreateSnapshotXAmzTargetEnum = "DirectoryService_20150416.CreateSnapshot"
)

type CreateSnapshotHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateSnapshotRequest struct {
	Headers CreateSnapshotHeaders
	Request shared.CreateSnapshotRequest `request:"mediaType=application/json"`
}

type CreateSnapshotResponse struct {
	ClientException                *interface{}
	ContentType                    string
	CreateSnapshotResult           *shared.CreateSnapshotResult
	EntityDoesNotExistException    *interface{}
	InvalidParameterException      *interface{}
	ServiceException               *interface{}
	SnapshotLimitExceededException *interface{}
	StatusCode                     int64
}
