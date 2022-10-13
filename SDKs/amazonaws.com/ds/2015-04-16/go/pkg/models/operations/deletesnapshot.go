package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSnapshotXAmzTargetEnum string

const (
	DeleteSnapshotXAmzTargetEnumDirectoryService20150416DeleteSnapshot DeleteSnapshotXAmzTargetEnum = "DirectoryService_20150416.DeleteSnapshot"
)

type DeleteSnapshotHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSnapshotXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSnapshotRequest struct {
	Headers DeleteSnapshotHeaders
	Request shared.DeleteSnapshotRequest `request:"mediaType=application/json"`
}

type DeleteSnapshotResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DeleteSnapshotResult        *shared.DeleteSnapshotResult
	EntityDoesNotExistException *interface{}
	InvalidParameterException   *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
