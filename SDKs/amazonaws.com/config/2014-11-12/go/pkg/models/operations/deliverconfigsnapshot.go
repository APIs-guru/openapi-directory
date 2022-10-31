package operations

import (
	"openapi/pkg/models/shared"
)

type DeliverConfigSnapshotXAmzTargetEnum string

const (
	DeliverConfigSnapshotXAmzTargetEnumStarlingDoveServiceDeliverConfigSnapshot DeliverConfigSnapshotXAmzTargetEnum = "StarlingDoveService.DeliverConfigSnapshot"
)

type DeliverConfigSnapshotHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeliverConfigSnapshotXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeliverConfigSnapshotRequest struct {
	Headers DeliverConfigSnapshotHeaders
	Request shared.DeliverConfigSnapshotRequest `request:"mediaType=application/json"`
}

type DeliverConfigSnapshotResponse struct {
	ContentType                               string
	DeliverConfigSnapshotResponse             *shared.DeliverConfigSnapshotResponse
	NoAvailableConfigurationRecorderException *interface{}
	NoRunningConfigurationRecorderException   *interface{}
	NoSuchDeliveryChannelException            *interface{}
	StatusCode                                int64
}
