package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEntitiesDetectionJobXAmzTargetEnum string

const (
	DescribeEntitiesDetectionJobXAmzTargetEnumComprehend20171127DescribeEntitiesDetectionJob DescribeEntitiesDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribeEntitiesDetectionJob"
)

type DescribeEntitiesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEntitiesDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeEntitiesDetectionJobRequest struct {
	Headers DescribeEntitiesDetectionJobHeaders
	Request shared.DescribeEntitiesDetectionJobRequest `request:"mediaType=application/json"`
}

type DescribeEntitiesDetectionJobResponse struct {
	ContentType                          string
	DescribeEntitiesDetectionJobResponse *shared.DescribeEntitiesDetectionJobResponse
	InternalServerException              *interface{}
	InvalidRequestException              *interface{}
	JobNotFoundException                 *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
}
