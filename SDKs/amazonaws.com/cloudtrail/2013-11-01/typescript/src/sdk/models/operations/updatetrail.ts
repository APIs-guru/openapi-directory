import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail"
}


export class UpdateTrailHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateTrailXAmzTargetEnum;
}


export class UpdateTrailRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTrailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTrailRequest;
}


export class UpdateTrailResponse extends SpeakeasyBase {
  @Metadata()
  cloudTrailAccessNotEnabledException?: any;

  @Metadata()
  cloudTrailInvalidClientTokenIdException?: any;

  @Metadata()
  cloudWatchLogsDeliveryUnavailableException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  insufficientDependencyServiceAccessPermissionException?: any;

  @Metadata()
  insufficientEncryptionPolicyException?: any;

  @Metadata()
  insufficientS3BucketPolicyException?: any;

  @Metadata()
  insufficientSnsTopicPolicyException?: any;

  @Metadata()
  invalidCloudWatchLogsLogGroupArnException?: any;

  @Metadata()
  invalidCloudWatchLogsRoleArnException?: any;

  @Metadata()
  invalidEventSelectorsException?: any;

  @Metadata()
  invalidHomeRegionException?: any;

  @Metadata()
  invalidKmsKeyIdException?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidS3BucketNameException?: any;

  @Metadata()
  invalidS3PrefixException?: any;

  @Metadata()
  invalidSnsTopicNameException?: any;

  @Metadata()
  invalidTrailNameException?: any;

  @Metadata()
  kmsException?: any;

  @Metadata()
  kmsKeyDisabledException?: any;

  @Metadata()
  kmsKeyNotFoundException?: any;

  @Metadata()
  notOrganizationMasterAccountException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  organizationNotInAllFeaturesModeException?: any;

  @Metadata()
  organizationsNotInUseException?: any;

  @Metadata()
  s3BucketDoesNotExistException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  trailNotFoundException?: any;

  @Metadata()
  trailNotProvidedException?: any;

  @Metadata()
  unsupportedOperationException?: any;

  @Metadata()
  updateTrailResponse?: shared.UpdateTrailResponse;
}
