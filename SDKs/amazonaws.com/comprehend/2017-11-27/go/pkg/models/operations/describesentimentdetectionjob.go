package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSentimentDetectionJobXAmzTargetEnum string

const (
	DescribeSentimentDetectionJobXAmzTargetEnumComprehend20171127DescribeSentimentDetectionJob DescribeSentimentDetectionJobXAmzTargetEnum = "Comprehend_20171127.DescribeSentimentDetectionJob"
)

type DescribeSentimentDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSentimentDetectionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeSentimentDetectionJobRequest struct {
	Headers DescribeSentimentDetectionJobHeaders
	Request shared.DescribeSentimentDetectionJobRequest `request:"mediaType=application/json"`
}

type DescribeSentimentDetectionJobResponse struct {
	ContentType                           string
	DescribeSentimentDetectionJobResponse *shared.DescribeSentimentDetectionJobResponse
	InternalServerException               *interface{}
	InvalidRequestException               *interface{}
	JobNotFoundException                  *interface{}
	StatusCode                            int64
	TooManyRequestsException              *interface{}
}
