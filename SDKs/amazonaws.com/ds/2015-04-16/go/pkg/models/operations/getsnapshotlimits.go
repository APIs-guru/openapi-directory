package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnapshotLimitsXAmzTargetEnum string

const (
	GetSnapshotLimitsXAmzTargetEnumDirectoryService20150416GetSnapshotLimits GetSnapshotLimitsXAmzTargetEnum = "DirectoryService_20150416.GetSnapshotLimits"
)

type GetSnapshotLimitsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSnapshotLimitsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSnapshotLimitsRequest struct {
	Headers GetSnapshotLimitsHeaders
	Request shared.GetSnapshotLimitsRequest `request:"mediaType=application/json"`
}

type GetSnapshotLimitsResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	GetSnapshotLimitsResult     *shared.GetSnapshotLimitsResult
	ServiceException            *interface{}
	StatusCode                  int64
}
