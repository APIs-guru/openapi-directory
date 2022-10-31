package operations

import (
	"openapi/pkg/models/shared"
)

type StopEntitiesDetectionJobXAmzTargetEnum string

const (
	StopEntitiesDetectionJobXAmzTargetEnumComprehend20171127StopEntitiesDetectionJob StopEntitiesDetectionJobXAmzTargetEnum = "Comprehend_20171127.StopEntitiesDetectionJob"
)

type StopEntitiesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopEntitiesDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopEntitiesDetectionJobRequest struct {
	Headers StopEntitiesDetectionJobHeaders
	Request shared.StopEntitiesDetectionJobRequest `request:"mediaType=application/json"`
}

type StopEntitiesDetectionJobResponse struct {
	ContentType                      string
	InternalServerException          *interface{}
	InvalidRequestException          *interface{}
	JobNotFoundException             *interface{}
	StatusCode                       int64
	StopEntitiesDetectionJobResponse *shared.StopEntitiesDetectionJobResponse
}
