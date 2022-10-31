package operations

import (
"openapi/pkg/models/shared")


type CreateTrailXAmzTargetEnum string

const (
    CreateTrailXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrail CreateTrailXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail"
)


type CreateTrailHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateTrailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateTrailRequest struct {
    Headers CreateTrailHeaders 
    Request shared.CreateTrailRequest `request:"mediaType=application/json"`
    
}

type CreateTrailResponse struct {
    CloudTrailAccessNotEnabledException *interface{} 
    CloudTrailInvalidClientTokenIDException *interface{} 
    CloudWatchLogsDeliveryUnavailableException *interface{} 
    ContentType string 
    CreateTrailResponse *shared.CreateTrailResponse 
    InsufficientDependencyServiceAccessPermissionException *interface{} 
    InsufficientEncryptionPolicyException *interface{} 
    InsufficientS3BucketPolicyException *interface{} 
    InsufficientSnsTopicPolicyException *interface{} 
    InvalidCloudWatchLogsLogGroupArnException *interface{} 
    InvalidCloudWatchLogsRoleArnException *interface{} 
    InvalidKmsKeyIDException *interface{} 
    InvalidParameterCombinationException *interface{} 
    InvalidS3BucketNameException *interface{} 
    InvalidS3PrefixException *interface{} 
    InvalidSnsTopicNameException *interface{} 
    InvalidTagParameterException *interface{} 
    InvalidTrailNameException *interface{} 
    KmsException *interface{} 
    KmsKeyDisabledException *interface{} 
    KmsKeyNotFoundException *interface{} 
    MaximumNumberOfTrailsExceededException *interface{} 
    NotOrganizationMasterAccountException *interface{} 
    OperationNotPermittedException *interface{} 
    OrganizationNotInAllFeaturesModeException *interface{} 
    OrganizationsNotInUseException *interface{} 
    S3BucketDoesNotExistException *interface{} 
    StatusCode int64 
    TrailAlreadyExistsException *interface{} 
    TrailNotProvidedException *interface{} 
    UnsupportedOperationException *interface{} 
    
}

