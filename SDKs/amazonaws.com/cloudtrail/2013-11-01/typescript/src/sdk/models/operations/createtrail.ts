import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail"
}


export class CreateTrailHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTrailXAmzTargetEnum;
}


export class CreateTrailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateTrailHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateTrailRequest;
}


export class CreateTrailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudTrailAccessNotEnabledException?: any;

  @SpeakeasyMetadata()
  cloudTrailInvalidClientTokenIdException?: any;

  @SpeakeasyMetadata()
  cloudWatchLogsDeliveryUnavailableException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createTrailResponse?: shared.CreateTrailResponse;

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
  invalidTagParameterException?: any;

  @SpeakeasyMetadata()
  invalidTrailNameException?: any;

  @SpeakeasyMetadata()
  kmsException?: any;

  @SpeakeasyMetadata()
  kmsKeyDisabledException?: any;

  @SpeakeasyMetadata()
  kmsKeyNotFoundException?: any;

  @SpeakeasyMetadata()
  maximumNumberOfTrailsExceededException?: any;

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
  trailAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  trailNotProvidedException?: any;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
