import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail"
}
export declare class UpdateTrailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrailXAmzTargetEnum;
}
export declare class UpdateTrailRequest extends SpeakeasyBase {
    headers: UpdateTrailHeaders;
    request: shared.UpdateTrailRequest;
}
export declare class UpdateTrailResponse extends SpeakeasyBase {
    cloudTrailAccessNotEnabledException?: any;
    cloudTrailInvalidClientTokenIdException?: any;
    cloudWatchLogsDeliveryUnavailableException?: any;
    contentType: string;
    insufficientDependencyServiceAccessPermissionException?: any;
    insufficientEncryptionPolicyException?: any;
    insufficientS3BucketPolicyException?: any;
    insufficientSnsTopicPolicyException?: any;
    invalidCloudWatchLogsLogGroupArnException?: any;
    invalidCloudWatchLogsRoleArnException?: any;
    invalidEventSelectorsException?: any;
    invalidHomeRegionException?: any;
    invalidKmsKeyIdException?: any;
    invalidParameterCombinationException?: any;
    invalidS3BucketNameException?: any;
    invalidS3PrefixException?: any;
    invalidSnsTopicNameException?: any;
    invalidTrailNameException?: any;
    kmsException?: any;
    kmsKeyDisabledException?: any;
    kmsKeyNotFoundException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    organizationNotInAllFeaturesModeException?: any;
    organizationsNotInUseException?: any;
    s3BucketDoesNotExistException?: any;
    statusCode: number;
    trailNotFoundException?: any;
    trailNotProvidedException?: any;
    unsupportedOperationException?: any;
    updateTrailResponse?: shared.UpdateTrailResponse;
}
