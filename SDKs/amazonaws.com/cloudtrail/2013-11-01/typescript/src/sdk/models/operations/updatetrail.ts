import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail"
}


export class UpdateTrailHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateTrailXAmzTargetEnum;
}


export class UpdateTrailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateTrailHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTrailRequest;
}


export class UpdateTrailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudTrailAccessNotEnabledException?: any;

  @SpeakeasyMetadata()
  cloudTrailInvalidClientTokenIdException?: any;

  @SpeakeasyMetadata()
  cloudWatchLogsDeliveryUnavailableException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insufficientDependencyServiceAccessPermissionException?: any;

  @SpeakeasyMetadata()
  insufficientEncryptionPolicyException?: any;

  @SpeakeasyMetadata()
  insufficientS3BucketPolicyException?: any;

  @SpeakeasyMetadata()
  insufficientSnsTopicPolicyException?: any;

  @SpeakeasyMetadata()
  invalidCloudWatchLogsLogGroupArnException?: any;

  @SpeakeasyMetadata()
  invalidCloudWatchLogsRoleArnException?: any;

  @SpeakeasyMetadata()
  invalidEventSelectorsException?: any;

  @SpeakeasyMetadata()
  invalidHomeRegionException?: any;

  @SpeakeasyMetadata()
  invalidKmsKeyIdException?: any;

  @SpeakeasyMetadata()
  invalidParameterCombinationException?: any;

  @SpeakeasyMetadata()
  invalidS3BucketNameException?: any;

  @SpeakeasyMetadata()
  invalidS3PrefixException?: any;

  @SpeakeasyMetadata()
  invalidSnsTopicNameException?: any;

  @SpeakeasyMetadata()
  invalidTrailNameException?: any;

  @SpeakeasyMetadata()
  kmsException?: any;

  @SpeakeasyMetadata()
  kmsKeyDisabledException?: any;

  @SpeakeasyMetadata()
  kmsKeyNotFoundException?: any;

  @SpeakeasyMetadata()
  notOrganizationMasterAccountException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  organizationNotInAllFeaturesModeException?: any;

  @SpeakeasyMetadata()
  organizationsNotInUseException?: any;

  @SpeakeasyMetadata()
  s3BucketDoesNotExistException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trailNotFoundException?: any;

  @SpeakeasyMetadata()
  trailNotProvidedException?: any;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;

  @SpeakeasyMetadata()
  updateTrailResponse?: shared.UpdateTrailResponse;
}
