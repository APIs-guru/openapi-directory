package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTrailXAmzTargetEnum string

const (
	UpdateTrailXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrail UpdateTrailXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail"
)

type UpdateTrailHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTrailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateTrailRequest struct {
	Headers UpdateTrailHeaders
	Request shared.UpdateTrailRequest `request:"mediaType=application/json"`
}

type UpdateTrailResponse struct {
	CloudTrailAccessNotEnabledException                    *interface{}
	CloudTrailInvalidClientTokenIDException                *interface{}
	CloudWatchLogsDeliveryUnavailableException             *interface{}
	ContentType                                            string
	InsufficientDependencyServiceAccessPermissionException *interface{}
	InsufficientEncryptionPolicyException                  *interface{}
	InsufficientS3BucketPolicyException                    *interface{}
	InsufficientSnsTopicPolicyException                    *interface{}
	InvalidCloudWatchLogsLogGroupArnException              *interface{}
	InvalidCloudWatchLogsRoleArnException                  *interface{}
	InvalidEventSelectorsException                         *interface{}
	InvalidHomeRegionException                             *interface{}
	InvalidKmsKeyIDException                               *interface{}
	InvalidParameterCombinationException                   *interface{}
	InvalidS3BucketNameException                           *interface{}
	InvalidS3PrefixException                               *interface{}
	InvalidSnsTopicNameException                           *interface{}
	InvalidTrailNameException                              *interface{}
	KmsException                                           *interface{}
	KmsKeyDisabledException                                *interface{}
	KmsKeyNotFoundException                                *interface{}
	NotOrganizationMasterAccountException                  *interface{}
	OperationNotPermittedException                         *interface{}
	OrganizationNotInAllFeaturesModeException              *interface{}
	OrganizationsNotInUseException                         *interface{}
	S3BucketDoesNotExistException                          *interface{}
	StatusCode                                             int64
	TrailNotFoundException                                 *interface{}
	TrailNotProvidedException                              *interface{}
	UnsupportedOperationException                          *interface{}
	UpdateTrailResponse                                    *shared.UpdateTrailResponse
}
