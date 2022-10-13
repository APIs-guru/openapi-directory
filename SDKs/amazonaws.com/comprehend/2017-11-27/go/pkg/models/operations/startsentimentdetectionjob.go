package operations

import (
	"openapi/pkg/models/shared"
)

type StartSentimentDetectionJobXAmzTargetEnum string

const (
	StartSentimentDetectionJobXAmzTargetEnumComprehend20171127StartSentimentDetectionJob StartSentimentDetectionJobXAmzTargetEnum = "Comprehend_20171127.StartSentimentDetectionJob"
)

type StartSentimentDetectionJobHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSentimentDetectionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartSentimentDetectionJobRequest struct {
	Headers StartSentimentDetectionJobHeaders
	Request shared.StartSentimentDetectionJobRequest `request:"mediaType=application/json"`
}

type StartSentimentDetectionJobResponse struct {
	ContentType                        string
	InternalServerException            *interface{}
	InvalidRequestException            *interface{}
	KmsKeyValidationException          *interface{}
	StartSentimentDetectionJobResponse *shared.StartSentimentDetectionJobResponse
	StatusCode                         int64
	TooManyRequestsException           *interface{}
	TooManyTagsException               *interface{}
}
