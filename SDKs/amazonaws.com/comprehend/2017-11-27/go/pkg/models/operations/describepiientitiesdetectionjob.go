package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePiiEntitiesDetectionJobXAmzTargetEnum string

const (
	DescribePiiEntitiesDetectionJobXAmzTargetEnumComprehend20171127DescribePiiEntitiesDetectionJob DescribePiiEntitiesDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribePiiEntitiesDetectionJob"
)

type DescribePiiEntitiesDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePiiEntitiesDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribePiiEntitiesDetectionJobRequest struct {
	Headers DescribePiiEntitiesDetectionJobHeaders
	Request shared.DescribePiiEntitiesDetectionJobRequest `request:"mediaType=application/json"`
}

type DescribePiiEntitiesDetectionJobResponse struct {
	ContentType                             string
	DescribePiiEntitiesDetectionJobResponse *shared.DescribePiiEntitiesDetectionJobResponse
	InternalServerException                 *interface{}
	InvalidRequestException                 *interface{}
	JobNotFoundException                    *interface{}
	StatusCode                              int64
	TooManyRequestsException                *interface{}
}
