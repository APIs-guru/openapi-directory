import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutInsightSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"
}


export class PutInsightSelectorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutInsightSelectorsXAmzTargetEnum;
}


export class PutInsightSelectorsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutInsightSelectorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutInsightSelectorsRequest;
}


export class PutInsightSelectorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  insufficientEncryptionPolicyException?: any;

  @Metadata()
  insufficientS3BucketPolicyException?: any;

  @Metadata()
  invalidHomeRegionException?: any;

  @Metadata()
  invalidInsightSelectorsException?: any;

  @Metadata()
  invalidTrailNameException?: any;

  @Metadata()
  kmsException?: any;

  @Metadata()
  notOrganizationMasterAccountException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  putInsightSelectorsResponse?: shared.PutInsightSelectorsResponse;

  @Metadata()
  s3BucketDoesNotExistException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  trailNotFoundException?: any;

  @Metadata()
  unsupportedOperationException?: any;
}
