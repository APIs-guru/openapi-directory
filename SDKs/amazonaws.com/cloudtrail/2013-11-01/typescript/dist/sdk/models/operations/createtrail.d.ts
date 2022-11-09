import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail"
}
export declare class CreateTrailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrailXAmzTargetEnum;
}
export declare class CreateTrailRequest extends SpeakeasyBase {
    headers: CreateTrailHeaders;
    request: shared.CreateTrailRequest;
}
export declare class CreateTrailResponse extends SpeakeasyBase {
    cloudTrailAccessNotEnabledException?: any;
    cloudTrailInvalidClientTokenIdException?: any;
    cloudWatchLogsDeliveryUnavailableException?: any;
    contentType: string;
    createTrailResponse?: shared.CreateTrailResponse;
    insufficientDependencyServiceAccessPermissionException?: any;
    insufficientEncryptionPolicyException?: any;
    insufficientS3BucketPolicyException?: any;
    insufficientSnsTopicPolicyException?: any;
    invalidCloudWatchLogsLogGroupArnException?: any;
    invalidCloudWatchLogsRoleArnException?: any;
    invalidKmsKeyIdException?: any;
    invalidParameterCombinationException?: any;
    invalidS3BucketNameException?: any;
    invalidS3PrefixException?: any;
    invalidSnsTopicNameException?: any;
    invalidTagParameterException?: any;
    invalidTrailNameException?: any;
    kmsException?: any;
    kmsKeyDisabledException?: any;
    kmsKeyNotFoundException?: any;
    maximumNumberOfTrailsExceededException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    organizationNotInAllFeaturesModeException?: any;
    organizationsNotInUseException?: any;
    s3BucketDoesNotExistException?: any;
    statusCode: number;
    trailAlreadyExistsException?: any;
    trailNotProvidedException?: any;
    unsupportedOperationException?: any;
}
