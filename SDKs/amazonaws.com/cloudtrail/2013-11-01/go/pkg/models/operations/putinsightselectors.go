package operations

import (
	"openapi/pkg/models/shared"
)

type PutInsightSelectorsXAmzTargetEnum string

const (
	PutInsightSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectors PutInsightSelectorsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"
)

type PutInsightSelectorsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutInsightSelectorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutInsightSelectorsRequest struct {
	Headers PutInsightSelectorsHeaders
	Request shared.PutInsightSelectorsRequest `request:"mediaType=application/json"`
}

type PutInsightSelectorsResponse struct {
	ContentType                           string
	InsufficientEncryptionPolicyException *interface{}
	InsufficientS3BucketPolicyException   *interface{}
	InvalidHomeRegionException            *interface{}
	InvalidInsightSelectorsException      *interface{}
	InvalidTrailNameException             *interface{}
	KmsException                          *interface{}
	NotOrganizationMasterAccountException *interface{}
	OperationNotPermittedException        *interface{}
	PutInsightSelectorsResponse           *shared.PutInsightSelectorsResponse
	S3BucketDoesNotExistException         *interface{}
	StatusCode                            int64
	TrailNotFoundException                *interface{}
	UnsupportedOperationException         *interface{}
}
