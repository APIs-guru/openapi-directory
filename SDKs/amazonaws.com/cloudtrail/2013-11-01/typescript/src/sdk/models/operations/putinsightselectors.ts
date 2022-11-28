import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutInsightSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"
}


export class PutInsightSelectorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutInsightSelectorsXAmzTargetEnum;
}


export class PutInsightSelectorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutInsightSelectorsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutInsightSelectorsRequest;
}


export class PutInsightSelectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insufficientEncryptionPolicyException?: any;

  @SpeakeasyMetadata()
  insufficientS3BucketPolicyException?: any;

  @SpeakeasyMetadata()
  invalidHomeRegionException?: any;

  @SpeakeasyMetadata()
  invalidInsightSelectorsException?: any;

  @SpeakeasyMetadata()
  invalidTrailNameException?: any;

  @SpeakeasyMetadata()
  kmsException?: any;

  @SpeakeasyMetadata()
  notOrganizationMasterAccountException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  putInsightSelectorsResponse?: shared.PutInsightSelectorsResponse;

  @SpeakeasyMetadata()
  s3BucketDoesNotExistException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trailNotFoundException?: any;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
